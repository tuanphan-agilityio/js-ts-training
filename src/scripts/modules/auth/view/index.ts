import { UserSignIn } from '@/types';
import { getElementById, querySelector } from '@/utils';

class AuthView {
  private btnSubmitSignIn: HTMLButtonElement;
  private emailElement: HTMLInputElement;
  private passwordElement: HTMLInputElement;

  constructor() {
    this.btnSubmitSignIn = querySelector('.btn-sign-in');
    this.emailElement = getElementById('email');
    this.passwordElement = getElementById('password');
  }

  /**
   * Binds the sign-in event to the provided handler.
   *
   * @param {Function} handleSignIn - The handler function for user sign-in.
   */
  bindSignInEvent = (handleSignIn: (user: UserSignIn) => Promise<void>) => {
    this.btnSubmitSignIn.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();

      const user: UserSignIn = {
        email: this.emailElement.value.trim() || '',
        password: this.passwordElement.value.trim() || '',
      };

      // Call the provided sign-in handler
      handleSignIn(user);
    });
  };
}

export default AuthView;
