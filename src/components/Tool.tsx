import React from "react";
import { Handle, Position, type Node } from "@xyflow/react";
import clsx from "clsx";

import type { Tool as ToolType } from "../types";

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
        {data.picto && (
          <>
            {data.picto.startsWith("http") ? (
              <img
                className="border-0 w-8 h-8"
                src={data.picto}
                alt={`Logo of ${data.name}`}
              />
            ) : (
              <span className="text-3xl">{data.picto}</span>
            )}
          </>
        )}

        <p className="text-3xl font-bold">{data.name}</p>
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

const memoized = React.memo(Tool);
export { memoized as Tool };
