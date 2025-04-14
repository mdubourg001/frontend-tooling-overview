import React from "react";
import { Handle, Position, type Node } from "@xyflow/react";
import clsx from "clsx";

import type { Tool as ToolType } from "../types";
import { ToolPicto } from "./ToolPicto";

type Props = Pick<Node, "className"> & {
  data: Pick<ToolType, "name" | "picto">;
  size?: "small" | "regular";
  withHandles?: boolean;
  handleClick?: (key: ToolType["name"]) => void;
};

function Tool({
  className,
  data,
  size = "regular",
  withHandles = true,
  handleClick,
}: Props) {
  const Element = handleClick ? "button" : "div";

  return (
    <Element
      aria-label={handleClick ? `Open details about ${data.name}` : undefined}
      className={clsx(
        "inline-block shadow-md rounded-md bg-slate-800 text-white border-2 border-yellow-600",
        {
          "px-1": size === "small",
          "px-4 py-3": size === "regular",
          "cursor-pointer hover:border-yellow-400 transition-colors":
            !!handleClick,
          // "!border-8 !border-red-600": data.description,
        },
        className
      )}
      onClick={handleClick ? () => handleClick(data.name) : undefined}
    >
      <div
        className={clsx("flex items-center", {
          "gap-2": size === "small",
          "gap-4": size === "regular",
        })}
      >
        <ToolPicto picto={data.picto as string} size={size} />

        <span
          className={clsx("font-bold", {
            "text-3xl": size === "regular",
          })}
        >
          {data.name as string}
        </span>
      </div>

      {withHandles && <Handle type="target" position={Position.Top} />}
      {withHandles && <Handle type="source" position={Position.Top} />}
    </Element>
  );
}

const memoized = React.memo(Tool);
export { memoized as Tool };
