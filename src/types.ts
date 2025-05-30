import type { CATEGORIES } from "./constants";

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export type Tool = Partial<Record<CategoryKey, boolean>> & {
  name: string;
  description?: (bag: {
    handleCategoryClick: (key: CategoryKey) => void;
    handleToolClick: (name: Tool["name"]) => void;
  }) => React.ReactNode;
  picto?: string;
  uses?: string[];
  related?: string[];
  links?: { label: string; href: string }[];
  pos?: { x: number; y: number };
};
