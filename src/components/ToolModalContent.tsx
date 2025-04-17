import React from "react";

import type { Tool } from "../types";

type Props = {
  tool: Tool;
  sameCategoryTools: Tool[];
  handleCategoryClick: (key: string) => void;
  handleToolClick: (name: string) => void;
};

function ToolModalContent({
  tool,
  sameCategoryTools = [],
  handleCategoryClick,
  handleToolClick,
}: Props) {
  if (!tool) {
    return null;
  }

  // TODO: categories tags

  const description = tool?.description?.({
    handleCategoryClick,
    handleToolClick,
  });

  return (
    <div className="flex flex-col gap-y-4">
      {"description" in tool && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300">
            Description
          </h2>
          {typeof description === "string" ? <p>{description}</p> : description}
        </>
      )}

      {"links" in tool && (tool.links?.length ?? 0) > 0 && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
            Related resources
          </h2>
          <ul className="list-disc list-inside">
            {tool.links?.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {sameCategoryTools.length > 0 && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
            Similar tools
          </h2>

          <div className="flex items-center flex-wrap gap-4">
            {sameCategoryTools.map((tool, index) => (
              <>
                <div key={tool.name} className="flex items-center gap-x-2">
                  {tool.picto && tool.picto.startsWith("http") && (
                    <img
                      src={tool.picto}
                      alt={`Logo of ${tool.name}`}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {tool.picto && !tool.picto.startsWith("http") && (
                    <span className="text-xl object-contain">{tool.picto}</span>
                  )}
                  <span>{tool.name}</span>
                </div>
                {index < sameCategoryTools.length - 1 && (
                  <span aria-hidden>•</span>
                )}
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const memoized = React.memo(ToolModalContent);
export { memoized as ToolModalContent };
