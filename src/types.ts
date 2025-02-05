import type { CATEGORIES } from "./constants";

export type CategoryKey = (typeof CATEGORIES)[number]["key"];

export type Tool = Partial<Record<CategoryKey, boolean>> & {
  name: string;
  picto?: string;
  uses?: string[];
  related?: string[];
};
