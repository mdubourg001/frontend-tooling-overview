import { useReactFlow } from "@xyflow/react";
import cx from "clsx";

type Props = {
  filters: {
    key: string;
    label: string;
    checked: boolean;
  }[];
  handleFilterChange: (key: string) => void;
  handleCheckAll: () => void;
  handleUncheckAll: () => void;
  handleCategoryMouseEnter: (key: string) => void;
  handleCategoryMouseLeave: () => void;
};

export function CategoryFilters({
  filters,
  handleFilterChange,
  handleCheckAll,
  handleUncheckAll,
  handleCategoryMouseEnter,
  handleCategoryMouseLeave,
}: Props) {
  const { fitView } = useReactFlow();

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="text-2xl font-extrabold ">Frontend Tooling Overview</h1>
      <div className="flex items-center gap-x-2 mb-4">
        <button className="underline">What?</button>
        <span aria-hidden>•</span>
        <button className="underline">Why?</button>
        <span aria-hidden>•</span>
        <a
          href="https://github.com/mdubourg001/frontend-tooling-overview"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      {filters.map((filter) => (
        <button
          className={cx(
            "flex items-center gap-x-2 px-2 py-1 border-2 rounded w-fit text-black cursor-pointer active:scale-95 transition-transform",
            {
              "border-yellow-600 bg-black text-white": filter.checked,
              "bg-white border-slate-200": !filter.checked,
            }
          )}
          key={filter.key}
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
            {filter.label}
          </label>
        </button>
      ))}

      <div className="flex gap-x-2 font-bold text-black border-t pt-4 mt-2">
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
