import clsx from "clsx";
import { useContext, useEffect } from "react";

import Modal from "@components/ui/Modal";
import Text from "@components/ui/Text";

import { NotificationContext } from "@/stores/contexts/notifications";

import styles from "./styles/notificationModal.module.scss";

const NotificationModal = () => {
  const {
    isNotificationSuccess,
    isNotificationOpen,
    copyNotificationText,
    onCloseNotification,
  } = useContext(NotificationContext);

  // useEffect(() => {
  //   if (isNotificationOpen) {
  //     const closeTimeout = setTimeout(() => onCloseNotification(), 4 * 1000);
  //     return () => {
  //       return clearTimeout(closeTimeout);
  //     };
  //   }
  // }, [isNotificationOpen]);

  return (
    <Modal
      isOpen={isNotificationOpen}
      onClose={onCloseNotification}
      isNotification
    >
      <div
        className={clsx(
          styles.notificationModal,
          isNotificationSuccess && styles.notificationModal__success,
        )}
      >
        <Text componentType="text4">{copyNotificationText}</Text>
      </div>
    </Modal>
  );
};

export default NotificationModal;
