import React from "react";
import { Handle, Position, type Node } from "@xyflow/react";
import clsx from "clsx";

import type { Tool as ToolType } from "../types";
import { ToolPicto } from "./ToolPicto";

type Props = Node & {
  data: ToolType;
};

function Tool({ className, data }: Props) {
  return (
    <div
      className={clsx(
        "px-4 py-3 shadow-md rounded-md bg-slate-800 text-white border-2 border-yellow-600",
        className
      )}
    >
      <div className="flex gap-4 items-center">
        <ToolPicto tool={data} />

        <p className="text-3xl font-bold">{data.name}</p>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Top} />
    </div>
  );
}

const memoized = React.memo(Tool);
export { memoized as Tool };
