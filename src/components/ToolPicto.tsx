import type { Tool } from "../types";

type Props = {
  tool: Tool;
};

export function ToolPicto({ tool }: Props) {
  if (!tool.picto) {
    return null;
  }

  if (tool.picto.startsWith("http")) {
    return (
      <img
        className="border-0 w-8 h-8"
        src={tool.picto}
        alt={`Logo of ${name}`}
      />
    );
  } else {
    return <span className="text-3xl">{tool.picto}</span>;
  }
}
