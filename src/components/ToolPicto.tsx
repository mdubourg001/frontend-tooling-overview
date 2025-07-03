import clsx from "clsx";
import { useI18n } from "../i18n";

type Props = {
  picto?: string;
  size?: "small" | "regular";
  name?: string;
};

export function ToolPicto({ picto, size = "regular", name }: Props) {
  const { t } = useI18n();
  if (!picto) {
    return null;
  }

  if (picto.startsWith("http")) {
    return (
      <img
        aria-hidden
        className={clsx("inline-block border-0 ", {
          "w-3 h-3": size === "small",
          "w-8 h-8": size === "regular",
        })}
        src={picto}
        alt={name ? `${t.ui.logoAlt} ${name}` : ""}
      />
    );
  } else {
    return (
      <span
        aria-hidden
        className={clsx("inline-block", {
          "text-3xl": size === "regular",
        })}
      >
        {picto}
      </span>
    );
  }
}
