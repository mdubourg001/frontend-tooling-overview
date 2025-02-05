import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";

type Props = {
  className?: string;
  dataTestId?: string;
  children: React.ReactNode;
  title?: string;
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
            "fixed z-40 w-10/12 max-w-[606px] py-5 px-6 bg-slate-900 text-white max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 left-1/2 overflow-y-scroll",
            className
          )}
          onEscapeKeyDown={onRequestClose}
          onPointerDownOutside={onRequestClose}
          onClick={(event) => event.stopPropagation()}
          onInteractOutside={onRequestClose}
        >
          {title && (
            <Dialog.Title className="font-bold leading-7 mb-[17px] text-24">
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
