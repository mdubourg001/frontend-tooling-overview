import { useReactFlow } from "@xyflow/react";
import cx from "clsx";

import { CATEGORIES } from "../constants";
import { useI18n } from "../i18n";

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
  const prezMode = false;
  const { fitView } = useReactFlow();
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-2xl font-extrabold">{t.ui.title}</h1>
      <div className="flex justify-center md:justify-normal items-center gap-x-2">
        <button className="underline cursor-pointer" onClick={handleWhatClick}>
          {t.ui.whatIsIt}
        </button>
        <span aria-hidden>•</span>
        <a
          href="https://github.com/mdubourg001/frontend-tooling-overview"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.ui.github}
        </a>
        <span aria-hidden>•</span>
        <button
          className="underline cursor-pointer"
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
        >
          {language === "en" ? "🇫🇷" : "🇬🇧"}
        </button>
      </div>

      <div className="flex justify-center md:justify-normal items-center gap-x-2 mt-1 md:mb-4">
        <button
          className="underline cursor-pointer"
          onClick={handleToggleSimulationRunning}
        >
          {isSimulationRunning ? t.ui.stopSimulation : t.ui.startSimulation}
          &nbsp;{t.ui.simulation}
        </button>
        <span aria-hidden>•</span>
        <button className="underline cursor-pointer" onClick={handleResetClick}>
          {t.ui.reset}
        </button>
        <span aria-hidden>•</span>
        <button
          className="underline cursor-pointer"
          onClick={handleShuffleClick}
        >
          {t.ui.shuffle}
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
            <div className="flex items-center gap-x-2 w-fit" key={filter.key}>
              <button
                className={cx(
                  "flex items-center gap-x-2 px-2 py-1 border-2 rounded w-fit text-black cursor-pointer active:scale-95 transition-transform",
                  {
                    "border-yellow-600 bg-black text-white": filter.checked,
                    "bg-white border-slate-200": !filter.checked,
                  }
                )}
                aria-label={`${t.ui.toggleFilter} ${filter.label}`}
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
                  {t.ui.about}
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
          {t.ui.checkAll}
        </button>
        <button
          className="cursor-pointer px-2 py-1 border rounded active:scale-95 transition-transform"
          onClick={handleUncheckAll}
        >
          {t.ui.uncheckAll}
        </button>
      </div>
    </div>
  );
}
