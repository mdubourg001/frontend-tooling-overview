import { useEffect, useMemo, useState } from "react";
import { useQueryState } from "nuqs";
import { NuqsAdapter } from "nuqs/adapters/react";
import clsx from "clsx";
import {
  ReactFlow,
  ReactFlowProvider,
  Panel,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";

import { Tool } from "./Tool";
import { CategoryFilters } from "./CategoryFilters";
import { WhatModalContent } from "./WhatModalContent";
import { CategoryModalContent } from "./CategoryModalContent";
import { ToolModalContent } from "./ToolModalContent";
import { ToolPicto } from "./ToolPicto";
import { useLayoutedElements } from "../hooks/useLayoutedElements";
import { useModal } from "../hooks/useModal";
import { getCategories, getLocalizedTool, TOOLS } from "../constants";
import { I18nProvider, useI18n } from "../i18n";
import type { Tool as ToolType } from "../types";

import "@xyflow/react/dist/style.css";

const initialNodes: Node[] = Object.values(TOOLS).map((tool, index) => ({
  id: tool.name,
  type: "custom",
  data: tool,
  position: { x: tool.pos.x ?? 0, y: tool.pos.y ?? index * 100 },
}));

const initialEdges: Edge[] = Object.values(TOOLS).flatMap((tool) => {
  let edges: Edge[] = [];

  if ("uses" in tool) {
    edges = tool.uses.map((use) => ({
      id: `${tool.name}-${use}`,
      type: "simplebezier",
      source: tool.name,
      target: use,
      animated: true,
      style: {
        strokeWidth: 4,
        stroke: "black",
      },
      // markerEnd: {
      //   type: MarkerType.ArrowClosed,
      //   color: "#fff",
      //   width: 30,
      //   height: 30,
      // },
    }));
  }

  if ("related" in tool) {
    edges = [
      ...edges,
      ...tool.related.map((related) => ({
        id: `${tool.name}-${related}`,
        source: tool.name,
        target: related,
        style: {
          stroke: "gray",
        },
      })),
    ];
  }

  return edges;
});

// TODO: memoize components
function LayoutFlow() {
  const { language, t } = useI18n();
  const categories = getCategories(language);
  const [initialRunning, setInitialRunning] = useState(true);
  const [filters, setFilters] = useState(
    categories.map((cat) => ({ key: cat.key, label: cat.name, checked: true }))
  );

  useEffect(
    function updateFiltersOnLanguageChange() {
      setFilters((prevFilters) =>
        categories.map((category) => {
          const existingFilter = prevFilters.find(
            (f) => f.key === category.key
          );

          return {
            key: category.key,
            label: category.name,
            checked: existingFilter?.checked ?? true,
          };
        })
      );
    },
    [JSON.stringify(categories)]
  );

  const [emphasizedCategory, setEmphasizedCategory] = useState<string | null>(
    null
  );
  const [focusedCategory, setFocusedCategory] = useQueryState("category");
  const [focusedTool, setFocusedTool] = useQueryState("tool");

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [initialized, { toggle, isRunning }, dragEvents] =
    useLayoutedElements(initialRunning);

  const { toggle: toggleWhatModal, render: renderWhatModal } = useModal({
    title: t.ui.title,
    cancelLabel: t.ui.close,
    confirmLabel: "",
    children: () => <WhatModalContent />,
  });

  const focusedCategoryObject = categories.find(
    (cat) => cat.key === focusedCategory
  );
  const focusedCategoryTools = Object.values(TOOLS).filter(
    (tool) => tool[focusedCategory]
  );
  const { toggle: toggleFocusCategoryModal, render: renderFocusCategoryModal } =
    useModal({
      title: focusedCategoryObject?.name,
      cancelLabel: t.ui.close,
      confirmLabel: "",
      initialIsOpen: !!focusedCategory,
      children: () => (
        <CategoryModalContent
          category={focusedCategoryObject}
          tools={focusedCategoryTools}
          handleToolClick={(toolName: string) => {
            toggleFocusCategoryModal();
            setFocusedCategory(null);
            setFocusedTool(toolName);
            toggleFocusToolModal();
          }}
        />
      ),
      onCancel: () => setFocusedCategory(null),
    });

  const focusedToolObject = focusedTool
    ? getLocalizedTool(
        TOOLS[focusedTool as keyof typeof TOOLS] as ToolType,
        language
      )
    : null;
  const { toggle: toggleFocusToolModal, render: renderFocusToolModal } =
    useModal({
      title: (
        <div className="flex gap-x-2 items-center">
          <ToolPicto
            picto={focusedToolObject?.picto}
            name={focusedToolObject?.name}
          />
          <span>{focusedToolObject?.name}</span>
        </div>
      ),
      cancelLabel: t.ui.close,
      confirmLabel: "",
      initialIsOpen: !!focusedToolObject,
      children: () => (
        <ToolModalContent
          tool={focusedToolObject}
          tools={[]}
          handleCategoryClick={handleFocusCategoryClick}
          handleToolClick={handleFocusToolClick}
        />
      ),
      onCancel: () => setFocusedTool(null),
    });

  const filteredNodes = useMemo(
    () =>
      nodes.map((node) => ({
        ...node,
        className: clsx("transition-opacity", {
          "opacity-20": emphasizedCategory && !node.data[emphasizedCategory],
        }),
        hidden: !filters.some(
          (filter) => filter.checked && node.data[filter.key]
        ),
      })),
    [nodes, filters]
  );

  const filteredEdges = useMemo(
    () =>
      edges.map((edge) => ({
        ...edge,
        hidden: !(
          filteredNodes.some((node) => node.id === edge.source) &&
          filteredNodes.some((node) => node.id === edge.target)
        ),
      })),

    [edges, filteredNodes]
  );

  // ----- effects -----

  useEffect(
    function controlInitialFocusedToolOrCategory() {
      if (!focusedToolObject) {
        setFocusedTool(null);
      }

      if (!focusedCategoryObject) {
        setFocusedCategory(null);
      }
    },
    [focusedToolObject, focusedCategoryObject]
  );

  // ----- handlers -----

  const handleResetClick = () => {
    if (initialized && isRunning?.() && initialRunning) {
      toggle();
    }

    setNodes((nodes) =>
      nodes.map((node) => {
        const tool = TOOLS[node.id];

        if (tool) {
          return {
            ...node,
            position: { x: tool.pos.x ?? 0, y: tool.pos.y ?? 0 },
          };
        }

        return node;
      })
    );

    if (initialRunning) {
      setTimeout(toggle);
    }
  };

  const handleShuffleClick = () => {
    if (initialized && isRunning?.() && initialRunning) {
      toggle();
    }

    setNodes((nodes) =>
      nodes.map((node) => ({
        ...node,
        position: {
          x: Math.random() * 1800 - 900,
          y: Math.random() * 1800 - 900,
        },
      }))
    );

    if (initialRunning) {
      setTimeout(toggle);
    }
  };

  const handleFocusCategoryClick = (key: string) => {
    setFocusedCategory(key);
    setFocusedTool(null);

    if (!focusedCategory) {
      toggleFocusCategoryModal();
    }
  };

  const handleFocusToolClick = (name: string) => {
    setFocusedTool(name);

    if (!focusedTool) {
      toggleFocusToolModal();
    }
  };

  // ----- rendering -----

  return (
    <>
      <aside className="fixed left-6 right-6 top-6 p-4 md:left-10 md:right-auto md:top-10 md:p-0 bg-gradient-to-br md:bg-none from-orange-300 to-rose-300 border md:border-0 text-center md:text-left z-10">
        <CategoryFilters
          filters={filters}
          isSimulationRunning={initialized && isRunning?.()}
          handleWhatClick={toggleWhatModal}
          handleToggleSimulationRunning={() => {
            const willBeRunning = !isRunning?.();
            toggle();
            setInitialRunning(willBeRunning);
          }}
          handleResetClick={handleResetClick}
          handleShuffleClick={handleShuffleClick}
          handleFilterChange={(key) => {
            setFilters((filters) =>
              filters.map((f) =>
                f.key === key ? { ...f, checked: !f.checked } : f
              )
            );
          }}
          handleCheckAll={() => {
            setFilters((filters) =>
              filters.map((f) => ({ ...f, checked: true }))
            );
          }}
          handleUncheckAll={() => {
            setFilters((filters) =>
              filters.map((f) => ({ ...f, checked: false }))
            );
          }}
          handleFocusCategoryClick={handleFocusCategoryClick}
          handleCategoryMouseEnter={(key) => {
            if (filters.some((f) => f.key === key && f.checked)) {
              setEmphasizedCategory(key);
            }
          }}
          handleCategoryMouseLeave={() => setEmphasizedCategory(null)}
        />
      </aside>

      <ReactFlow
        nodeTypes={{ custom: Tool }}
        nodes={filteredNodes}
        edges={filteredEdges}
        minZoom={0.45}
        defaultViewport={{ x: 821, y: 471, zoom: 2 }}
        onNodeDragStart={dragEvents.start}
        onNodeDrag={dragEvents.drag}
        onNodeDragStop={dragEvents.stop}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_, node: Node) => {
          handleFocusToolClick(node.data.name as string);
        }}
      >
        <Panel>
          {renderWhatModal()}
          {renderFocusCategoryModal()}
          {renderFocusToolModal()}

          {/* <button
          onClick={() => {
            console.log(
              nodes.map((n) => ({ name: n.data.name, pos: n.position }))
            );
          }}
        >
          pos
        </button> */}
        </Panel>
      </ReactFlow>
    </>
  );
}

export function ToolingGraph() {
  return (
    <ReactFlowProvider>
      <NuqsAdapter>
        <I18nProvider>
          <LayoutFlow />
        </I18nProvider>
      </NuqsAdapter>
    </ReactFlowProvider>
  );
}
