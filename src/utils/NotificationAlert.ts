import { message as AntMessage, notification } from "antd";

export const NotificationAlert = (
  type?: string,
  message?: string,
  description?: string
) => {
  if (window.screen.width > 768) {
    if (type === "success" || type === "warning" || type === "error")
      notification[type]({ message, description });
    return;
  } else if (window.screen.width <= 768) {
    AntMessage.open({
      type: `${type}` as any,
      content: `${description}`,
      duration: 3,
    });
  }
};
