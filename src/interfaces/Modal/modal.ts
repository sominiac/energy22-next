import type { ReactElement } from "react";

export interface IModalProps {
  children: ReactElement;
  onClose: () => void;
  isOpen: boolean;
  isVerticalView?: boolean;
  isNotification?: boolean;
}
