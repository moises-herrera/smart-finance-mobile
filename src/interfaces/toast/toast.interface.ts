import { ToastMessage } from './toast-message.type';

/**
 * Toast notification interface.
 */
export interface Toast {
  /** Notification message. */
  message: string;

  /** Notification type. */
  type: ToastMessage;
}
