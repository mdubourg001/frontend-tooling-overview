import { useState, useCallback } from "react";

import { Modal } from "../components/Modal";

export function useModal<T = undefined>({
  modalClassName,
  title,
  description,
  children,
  cancelLabel = "",
  confirmLabel = "",
  confirmDisabled,
  initialIsOpen = false,
  onCancel,
  onConfirm,
}: {
  modalClassName?: string;
  title?: React.ReactNode;
  description?: (metadata: T) => React.ReactNode;
  children?: (metadata: T) => React.ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmDisabled?: boolean;
  initialIsOpen?: boolean;
  onCancel?: (metadata: T, preventClosing: () => void) => void;
  onConfirm?: (metadata: T, preventClosing: () => void) => void;
}) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [metadata, setMetadata] = useState<T | undefined>(undefined);

  const toggleIsOpen = useCallback(
    (metadata?: T) => {
      if (!isOpen && metadata) {
        setMetadata(metadata);
      } else {
        setMetadata(undefined);
      }

      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const handleClickCancel = useCallback(() => {
    let shouldClose = true;

    if (onCancel) {
      onCancel(metadata, () => {
        shouldClose = false;
      });
    }

    if (shouldClose) {
      setMetadata(undefined);
      setIsOpen(false);
    }
  }, [onCancel, metadata]);

  const handleClickConfirm = useCallback(() => {
    let shouldClose = true;

    if (onConfirm) {
      onConfirm(metadata, () => {
        shouldClose = false;
      });
    }

    if (shouldClose) {
      setMetadata(undefined);
      setIsOpen(false);
    }
  }, [onConfirm, metadata]);

  const renderModal = useCallback(() => {
    return isOpen ? (
      <Modal
        className={modalClassName}
        dataTestId="modal"
        title={title}
        description={description?.(metadata)}
        onRequestClose={handleClickCancel}
      >
        {children?.(metadata)}

        {(cancelLabel || confirmLabel) && (
          <div className="flex mt-auto justify-end md:mt-16 gap-x-8">
            {cancelLabel && (
              <button
                className="cursor-pointer hover:text-orange-300 underline transition-colors"
                onClick={handleClickCancel}
              >
                {cancelLabel}
              </button>
            )}

            {confirmLabel && (
              <button
                className="cursor-pointer"
                onClick={handleClickConfirm}
                disabled={confirmDisabled}
              >
                {confirmLabel}
              </button>
            )}
          </div>
        )}
      </Modal>
    ) : null;
  }, [
    metadata,
    isOpen,
    title,
    description,
    modalClassName,
    children,
    cancelLabel,
    confirmLabel,
    confirmDisabled,
    handleClickCancel,
    handleClickConfirm,
  ]);

  return {
    toggle: toggleIsOpen,
    render: renderModal,
  };
}
