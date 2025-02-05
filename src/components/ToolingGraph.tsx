import { useMemo, useState } from "react";
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
import { useLayoutedElements } from "../hooks/useLayoutedElements";
import { CATEGORIES, TOOLS } from "../constants";

import "@xyflow/react/dist/style.css";
import clsx from "clsx";

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
      className: "[&>path]:!stroke-2",
      id: `${tool.name}-${use}`,
      source: tool.name,
      target: use,
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
        className: "[&>path]:opacity-50",
        id: `${tool.name}-${related}`,
        source: tool.name,
        target: related,
        animated: true,
      })),
    ];
  }

  return edges;
});

function LayoutFlow() {
  const [filters, setFilters] = useState(
    CATEGORIES.map((cat) => ({ key: cat.key, label: cat.name, checked: true }))
  );
  const [emphasizedCategory, setEmphasizedCategory] = useState<string | null>(
    null
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [initialized, { toggle, isRunning }, dragEvents] =
    useLayoutedElements();

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

  // TODO: somehow make tools that are very used be bigger ?

  return (
    <ReactFlow
      nodeTypes={{ custom: Tool }}
      nodes={filteredNodes}
      edges={filteredEdges}
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

        <aside className="fixed left-10 top-10">
          <CategoryFilters
            filters={filters}
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
            handleCategoryMouseEnter={(key) => setEmphasizedCategory(key)}
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
      <LayoutFlow />
    </ReactFlowProvider>
  );
}
