import { type FC, type ReactNode, useState } from "react";

import { NotificationContext } from "@/stores/contexts/notifications";

const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isNotificationSuccess, setIsNotificationSuccess] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [copyNotificationText, setCopyNotificationText] = useState("");

  const onOpenNotification = () => {
    setIsNotificationOpen(true);
  };
  const onCloseNotification = () => {
    setIsNotificationOpen(false);
  };

  return (
    <NotificationContext
      value={{
        isNotificationSuccess,
        setIsNotificationSuccess,
        isNotificationOpen,
        copyNotificationText,
        setCopyNotificationText,
        onOpenNotification,
        onCloseNotification,
      }}
    >
      {children}
    </NotificationContext>
  );
};

export default NotificationProvider;
