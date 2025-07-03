import React from "react";

import type { Tool } from "../types";
import { ToolPicto } from "./ToolPicto";
import { useI18n } from "../i18n";

type Props = {
  category: { key: string; name: string; description: React.ReactNode } | undefined;
  tools: Tool[];
  handleToolClick: (name: string) => void;
};

function CategoryModalContent({
  category,
  tools = [],
  handleToolClick,
}: Props) {
  const { t } = useI18n();
  
  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4">
      {"description" in category && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
            {t.ui.explanation}
          </h2>
          <p>{category?.description}</p>
        </>
      )}

      {tools.length > 0 && (
        <>
          <h2 className="italic text-2xl border-b w-fit border-orange-300 mb-4">
            {t.ui.examples}
          </h2>

          <div className="flex items-center flex-wrap gap-4">
            {tools.map((tool, index) => (
              <>
                <div key={tool.name} className="flex items-center gap-x-2">
                  <ToolPicto picto={tool.picto} />

                  <button
                    className="cursor-pointer hover:text-orange-300 hover:underline"
                    onClick={() => handleToolClick(tool.name)}
                  >
                    {tool.name}
                  </button>
                </div>
                {index < tools.length - 1 && <span aria-hidden>•</span>}
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const memoized = React.memo(CategoryModalContent);
export { memoized as CategoryModalContent };
