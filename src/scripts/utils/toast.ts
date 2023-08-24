import { MessageStatus } from '@/types';
import { createElement, getElementById } from '.';

class Toast {
  private static readonly TOAST_LIFETIME = 3000;

  /**
   * Creates a new toast element with the specified type and message.
   * @param type - The type of the toast message (e.g., 'success', 'error').
   * @param message - The message to be displayed in the toast.
   * @returns The newly created toast element.
   */
  private createToastElement(type: MessageStatus, message: string): HTMLDivElement {
    const toastElement = createElement('div');

    toastElement.classList.add('toast', `toast-${type}`);
    toastElement.innerHTML = `
      <span class="toast-icon"></span>
      <p class="toast-message">${message}</p>
    `;

    return toastElement;
  }

  /**
   * Removes the provided toast element after a specified timeout.
   * @param toastElement - The toast element to be removed.
   */
  private removeToastAfterTimeout(toastElement: HTMLDivElement): void {
    setTimeout(() => {
      toastElement.remove();
    }, Toast.TOAST_LIFETIME);
  }

  /**
   * Displays a toast message with the specified type and message.
   * @param type - The type of the toast message (e.g., 'success', 'error').
   * @param message - The message to be displayed in the toast.
   */
  show(type: MessageStatus, message: string): void {
    const mainElement = getElementById('main-page');
    const toastElement = this.createToastElement(type, message);

    this.removeToastAfterTimeout(toastElement);

    mainElement.appendChild(toastElement);
  }

  /**
   * Displays a success toast message with the provided message.
   * @param message - The success message to be displayed in the toast.
   */
  success(message: string): void {
    this.show(MessageStatus.SUCCESS, message);
  }

  /**
   * Displays an error toast message with the provided message.
   * @param message - The error message to be displayed in the toast.
   */
  error(message: string): void {
    this.show(MessageStatus.ERROR, message);
  }
}

export { Toast };
