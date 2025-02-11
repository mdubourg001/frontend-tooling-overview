import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

type Props = {
  className?: string;
  dataTestId?: string;
  children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onRequestClose?: () => void;
};

export function Modal({
  className,
  dataTestId,
  children,
  title,
  description,
  onRequestClose = () => {},
}: Props) {
  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-30 bg-black opacity-80" />
        <Dialog.Content
          data-testid={dataTestId}
          className={clsx(
            "fixed z-40 w-10/12 max-w-[606px] py-5 px-6 border-4 border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 text-white max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 left-1/2 overflow-y-scroll",
            className
          )}
          onEscapeKeyDown={onRequestClose}
          onPointerDownOutside={onRequestClose}
          onClick={(event) => event.stopPropagation()}
          onInteractOutside={onRequestClose}
        >
          {title && (
            <Dialog.Title className="leading-7 mb-[17px] font-semibold text-2xl bg-gradient-to-br from-orange-300 to-rose-400 px-2 py-1 -skew-x-5 w-fit">
              {title}
            </Dialog.Title>
          )}
          {description && (
            <Dialog.Description>{description}</Dialog.Description>
          )}

          {children}

          <button
            className="absolute text-slate-400 hover:text-white top-6 right-6 text-3xl cursor-pointer transition-colors"
            onClick={onRequestClose}
          >
            ✕
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
