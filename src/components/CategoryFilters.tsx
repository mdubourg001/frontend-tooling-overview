import { useState } from "react";
import { useReactFlow } from "@xyflow/react";
import cx from "clsx";

import { CATEGORIES } from "../constants";

type Props = {
  filters: {
    key: string;
    label: string;
    checked: boolean;
  }[];
  isSimulationRunning: boolean;
  handleWhatClick: () => void;
  handleToggleSimulationRunning: () => void;
  handleResetClick: () => void;
  handleShuffleClick: () => void;
  handleFilterChange: (key: string) => void;
  handleCheckAll: () => void;
  handleUncheckAll: () => void;
  handleFocusCategoryClick: (key: string) => void;
  handleCategoryMouseEnter: (key: string) => void;
  handleCategoryMouseLeave: () => void;
};

export function CategoryFilters({
  filters,
  isSimulationRunning,
  handleWhatClick,
  handleToggleSimulationRunning,
  handleResetClick,
  handleShuffleClick,
  handleFilterChange,
  handleCheckAll,
  handleUncheckAll,
  handleFocusCategoryClick,
  handleCategoryMouseEnter,
  handleCategoryMouseLeave,
}: Props) {
  const prezMode = true;
  const { fitView } = useReactFlow();

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-2xl font-extrabold ">Frontend Tooling Overview</h1>
      <div className="flex justify-center md:justify-normal items-center flex-wrap gap-x-2 gap-y-1 md:mb-4">
        <button className="underline cursor-pointer" onClick={handleWhatClick}>
          What is it?
        </button>
        <span aria-hidden>•</span>
        <a
          href="https://github.com/mdubourg001/frontend-tooling-overview"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <div aria-hidden className="basis-full h-0" />
        <button
          className="underline cursor-pointer"
          onClick={handleToggleSimulationRunning}
        >
          {isSimulationRunning ? "Stop" : "Start"}&nbsp;simulation
        </button>
        <span aria-hidden>•</span>
        <button className="underline cursor-pointer" onClick={handleResetClick}>
          Reset
        </button>
        <span aria-hidden>•</span>
        <button
          className="underline cursor-pointer"
          onClick={handleShuffleClick}
        >
          Shuffle
        </button>
      </div>

      <div className="relative hidden md:flex flex-col gap-y-2">
        {/* <textarea
          className="absolute bottom-0 rotate-180 w-full h-full bg-gradient-to-br from-orange-300 to-rose-300 z-10"
          name=""
          id=""
        ></textarea> */}

        {filters.map((filter) => {
          const categoryObject =
            CATEGORIES.find((cat) => cat.key === filter.key) ?? {};

          return (
            <div className="flex items-center gap-x-2" key={filter.key}>
              <button
                className={cx(
                  "flex items-center gap-x-2 px-2 py-1 border-2 rounded w-fit text-black cursor-pointer active:scale-95 transition-transform",
                  {
                    "border-yellow-600 bg-black text-white": filter.checked,
                    "bg-white border-slate-200": !filter.checked,
                  }
                )}
                aria-label={`Toggle ${filter.label}`}
                onMouseEnter={() => handleCategoryMouseEnter(filter.key)}
                onMouseLeave={handleCategoryMouseLeave}
              >
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  id={filter.key}
                  hidden
                  checked={filter.checked}
                  onChange={() => {
                    handleFilterChange(filter.key);

                    fitView({ padding: 200, duration: 500 });
                  }}
                />

                {filter.checked && <span className="text-sm">✅</span>}
                <label className="cursor-pointer text-sm" htmlFor={filter.key}>
                  {prezMode && !filter.checked
                    ? "*".repeat(filter.label.length)
                    : filter.label}
                </label>
              </button>

              {"description" in categoryObject && (
                <button
                  className="text-xs underline cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
                  onClick={() => handleFocusCategoryClick(filter.key)}
                >
                  about
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="hidden md:flex gap-x-2 font-bold text-black border-t pt-4 mt-2">
        <button
          className="cursor-pointer px-2 py-1 border rounded active:scale-95 transition-transform"
          onClick={handleCheckAll}
        >
          Check all
        </button>
        <button
          className="cursor-pointer px-2 py-1 border rounded active:scale-95 transition-transform"
          onClick={handleUncheckAll}
        >
          Uncheck all
        </button>
      </div>
    </div>
  );
}
