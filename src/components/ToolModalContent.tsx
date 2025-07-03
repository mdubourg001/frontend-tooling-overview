import React from "react";

import type { Tool } from "../types";
import { useI18n } from "../i18n";
import { getLocalizedTool } from "../constants";

type Props = {
  tool: Tool;
  tools: Tool[];
  handleCategoryClick: (key: string) => void;
  handleToolClick: (name: string) => void;
};

function ToolModalContent({
  tool,
  tools = [],
  handleCategoryClick,
  handleToolClick,
}: Props) {
  const { t, language } = useI18n();
  
  if (!tool) {
    return null;
  }
  
  const localizedTool = getLocalizedTool(tool, language);

  // TODO: categories tags

  const description = localizedTool?.description?.({
    handleCategoryClick,
    handleToolClick,
  });

  return (
    <div className="flex flex-col gap-y-4">
      {"description" in tool && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300">
            {t.ui.description}
          </h2>
          {typeof description === "string" ? <p>{description}</p> : description}
        </>
      )}

      {"links" in localizedTool && (localizedTool.links?.length ?? 0) > 0 && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
            {t.ui.relatedResources}
          </h2>
          <ul className="list-disc list-inside">
            {localizedTool.links?.map((link) => (
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

      {tools.length > 0 && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
            {t.ui.similarTools}
          </h2>

          <div className="flex items-center flex-wrap gap-4">
            {tools.map((tool, index) => (
              <>
                <div key={tool.name} className="flex items-center gap-x-2">
                  {tool.picto && tool.picto.startsWith("http") && (
                    <img
                      src={tool.picto}
                      alt={`${t.ui.logoAlt} ${tool.name}`}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  {tool.picto && !tool.picto.startsWith("http") && (
                    <span className="text-xl object-contain">{tool.picto}</span>
                  )}
                  <span>{tool.name}</span>
                </div>
                {index < tools.length - 1 && (
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
