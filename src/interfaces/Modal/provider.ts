export interface INotificationContextType {
  isNotificationSuccess: boolean;
  isNotificationOpen: boolean;
  copyNotificationText: string;

  setIsNotificationSuccess: (value: boolean) => void;
  setCopyNotificationText: (value: string) => void;
  onOpenNotification: () => void;
  onCloseNotification: () => void;
}
