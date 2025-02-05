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
      {filters.map((filter) => (
        <button
          className={cx(
            "flex items-center gap-x-2 text-white p-2 border rounded w-fit"
          )}
          key={filter.key}
          onMouseEnter={() => handleCategoryMouseEnter(filter.key)}
          onMouseLeave={handleCategoryMouseLeave}
        >
          <input
            type="checkbox"
            id={filter.key}
            checked={filter.checked}
            onChange={() => {
              handleFilterChange(filter.key);

              fitView({ padding: 200, duration: 500 });
            }}
          />

          <label htmlFor={filter.key}>{filter.label}</label>
        </button>
      ))}

      <div className="flex gap-x-2 text-white">
        <button onClick={handleCheckAll}>Check all</button>
        <button onClick={handleUncheckAll}>Uncheck all</button>
      </div>
    </div>
  );
}
