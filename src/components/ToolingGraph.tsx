import { useMemo, useState } from "react";
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
import { useLayoutedElements } from "../hooks/useLayoutedElements";
import { useModal } from "../hooks/useModal";
import { CATEGORIES, TOOLS } from "../constants";
import type { CategoryKey } from "../types";

import "@xyflow/react/dist/style.css";
import { ToolModalContent } from "./ToolModalContent";

const initialNodes: Node[] = TOOLS.map((tool, index) => ({
  id: tool.name,
  type: "custom",
  data: tool,
  position: { x: 0, y: index * 100 },
  // position: { x: (index % 10) * 100, y: (index % 10) * 100 },
}));

const initialEdges: Edge[] = TOOLS.flatMap((tool) => {
  let edges: Edge[] = [];

  if ("uses" in tool) {
    edges = tool.uses.map((use) => ({
      id: `${tool.name}-${use}`,
      source: tool.name,
      target: use,
      style: {
        strokeWidth: 2,
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
        animated: true,
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
  const [filters, setFilters] = useState(
    CATEGORIES.map((cat) => ({ key: cat.key, label: cat.name, checked: true }))
  );
  const [emphasizedCategory, setEmphasizedCategory] = useState<string | null>(
    null
  );
  const [focusedCategory, setFocusedCategory] = useQueryState("category");
  const [focusedTool, setFocusedTool] = useQueryState("tool");

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [initialized, { toggle, isRunning }, dragEvents] =
    useLayoutedElements();

  const { toggle: toggleWhatModal, render: renderWhatModal } = useModal({
    title: "Frontend Tooling Overview",
    cancelLabel: "Close",
    confirmLabel: "",
    children: () => <WhatModalContent />,
  });

  const focusedCategoryObject = CATEGORIES.find(
    (cat) => cat.key === focusedCategory
  );
  const focusedCategoryTools = TOOLS.filter((tool) => tool[focusedCategory]);
  const { toggle: toggleFocusCategoryModal, render: renderFocusCategoryModal } =
    useModal({
      title: focusedCategoryObject?.name,
      cancelLabel: "Close",
      confirmLabel: "",
      initialIsOpen: !!focusedCategory,
      children: () => (
        <CategoryModalContent
          category={focusedCategoryObject}
          tools={focusedCategoryTools}
          handleToolClick={(toolName: string) => {
            toggleFocusCategoryModal();
            setFocusedTool(toolName);
            toggleFocusToolModal();
          }}
        />
      ),
      onCancel: () => setFocusedCategory(null),
    });

  const focusedToolObject = TOOLS.find((tool) => tool.name === focusedTool);
  const { toggle: toggleFocusToolModal, render: renderFocusToolModal } =
    useModal({
      title: focusedToolObject?.name,
      cancelLabel: "Close",
      confirmLabel: "",
      initialIsOpen: !!focusedToolObject,
      children: () => <ToolModalContent tool={focusedToolObject} tools={[]} />,
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

  return (
    <ReactFlow
      nodeTypes={{ custom: Tool }}
      nodes={filteredNodes}
      edges={filteredEdges}
      minZoom={0.45}
      onNodeDragStart={dragEvents.start}
      onNodeDrag={dragEvents.drag}
      onNodeDragStop={dragEvents.stop}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
    >
      <Panel>
        {/* {initialized && (
          <button className="text-white" onClick={toggle}>
            {isRunning() ? "Stop" : "Start"}
          </button>
        )} */}

        {renderWhatModal()}
        {renderFocusCategoryModal()}
        {renderFocusToolModal()}

        <aside className="fixed left-10 top-10">
          <CategoryFilters
            filters={filters}
            isSimulationRunning={isRunning?.()}
            handleWhatClick={toggleWhatModal}
            handleToggleSimulationRunning={toggle}
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
            handleFocusCategoryClick={(key: CategoryKey) => {
              setFocusedCategory(key);
              toggleFocusCategoryModal();
            }}
            handleCategoryMouseEnter={(key) => {
              if (filters.some((f) => f.key === key && f.checked)) {
                setEmphasizedCategory(key);
              }
            }}
            handleCategoryMouseLeave={() => setEmphasizedCategory(null)}
          />
        </aside>
      </Panel>
    </ReactFlow>
  );
}

export function ToolingGraph() {
  return (
    <ReactFlowProvider>
      <NuqsAdapter>
        <LayoutFlow />
      </NuqsAdapter>
    </ReactFlowProvider>
  );
}
