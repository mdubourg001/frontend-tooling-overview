import clsx from "clsx";

type Props = {
  picto?: string;
  size?: "small" | "regular";
};

export function ToolPicto({ picto, size = "regular" }: Props) {
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
        alt={`Logo of ${name}`}
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
