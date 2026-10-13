import clsx from "clsx";
import { type MouseEvent, useEffect, useRef } from "react";

import CloseIcon from "@images/close-icon.svg";

import type { IModalProps } from "@/interfaces/Modal/modal";

import styles from "./styles/modal.module.scss";

const Modal = ({
  isOpen,
  onClose,
  isVerticalView = false,
  isNotification = false,
  children,
}: IModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const closeDialog = () => {
    onClose();
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const dialog = dialogRef?.current;

    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    const handleClose = () => {
      dialog.close();
      closeDialog();
    };

    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, []);

  const handleDialogClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target === dialogRef.current) {
      closeDialog();
    }
  };

  return (
    <dialog
      className={clsx(
        styles.modal,
        isVerticalView && styles.modal__verticalView,
        isNotification && styles.modal__notification,
      )}
      ref={dialogRef}
      onClick={handleDialogClick}
      data-isnotification={isNotification}
    >
      <button
        className={clsx(
          styles.modal__close,
          isNotification && styles.modal__closeSmall,
        )}
        onClick={closeDialog}
      >
        <CloseIcon width="15px" height="15px" />
      </button>
      {children}
    </dialog>
  );
};

export default Modal;
