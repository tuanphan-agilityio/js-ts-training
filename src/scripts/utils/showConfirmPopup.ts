import { generateConfirmPopupTemplate } from '@/templates';
import { getElementById } from './dom';

/**
 * Shows a confirmation popup with the provided message.
 *
 * @param {string} message - The message to display in the popup.
 * @param {Function} handleConfirm - The handler function for the confirmation action.
 */
const showConfirmPopup = (message: string, handleConfirm?: () => void) => {
  const confirmPopupElement = document.createElement('div');
  confirmPopupElement.className = 'modal';

  const popupContentElement = document.createElement('div');
  popupContentElement.className = 'modal-content';

  confirmPopupElement.appendChild(popupContentElement);
  popupContentElement.innerHTML = generateConfirmPopupTemplate(message);

  confirmPopupElement.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.closest('.btn-confirm, .btn-cancel')) {
      confirmPopupElement.remove();

      if (target.classList.contains('btn-confirm') && handleConfirm) {
        handleConfirm();
      }
    }
  });

  const mainElement = getElementById('site-main');
  mainElement.appendChild(confirmPopupElement);
};

export { showConfirmPopup };
