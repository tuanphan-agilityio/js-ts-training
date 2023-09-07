const generateConfirmPopupTemplate = (message: string): string =>
  `<p class="confirm-message">${message}</p>
    <div class="confirm-control">
      <button class="btn-control btn-confirm">Yes</button>
      <button class="btn-control btn-cancel">No</button>
    </div> `;

export { generateConfirmPopupTemplate };
