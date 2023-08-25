import { User, UserSignIn } from '@/types';
import { LocalStorage, clearFormErrors, showFormErrors, Toast } from '@/utils';
import { MESSAGES, STORAGE_KEYS } from '@/constants';
import { isEmpty } from '@/helpers';

import AuthModel from '../model';
import AuthView from '../view';
import validateSignInForm from './validation';

class AuthController {
  private model: AuthModel;
  private view: AuthView;
  private toast = new Toast();

  constructor(model: AuthModel, view: AuthView) {
    this.model = model;
    this.view = view;
    this.init();
  }

  private init = (): void => {
    this.view.bindSignInEvent(this.signIn);
  };

  /**
   * Handles the user sign-in process.
   *
   * @param {UserSignIn} user - The user sign-in data.
   * @returns {Promise<void>} - A promise that resolves when the sign-in process is complete.
   */
  private signIn = async (user: UserSignIn): Promise<void> => {
    const formErrors = validateSignInForm(user);
    const isValidForm = isEmpty(formErrors);

    if (isValidForm) {
      await this.handleValidSignIn(user);
      return;
    }

    this.handleInvalidSignIn(formErrors);
  };

  /**
   * Handles the user sign-in when the input data is valid.
   *
   * @param {UserSignIn} user - The user sign-in data.
   * @returns {Promise<void>} - A promise that resolves when the sign-in process is complete.
   */
  private handleValidSignIn = async (user: UserSignIn): Promise<void> => {
    clearFormErrors();

    try {
      const { accessToken, user: userInfo } = await this.model.signIn(user);

      this.saveUserCredentials(accessToken, userInfo);
      this.showSuccessError(MESSAGES.HANDLE_SUCCESS(' Sign in'));
    } catch (error) {
      this.showToastError(error);
    }
  };

  /**
   * Saves the user's credentials to local storage.
   *
   * @param {string} accessToken - The access token.
   * @param {User} userInfo - The user's information.
   */
  private saveUserCredentials = (accessToken: string, userInfo: User): void => {
    LocalStorage.save(STORAGE_KEYS.ACCESS_TOKEN_KEY, accessToken);
    LocalStorage.save(STORAGE_KEYS.USER_INFO_KEY, userInfo);
  };

  /**
   * Shows a toast message with an error.
   *
   * @param {unknown} error - The error to display.
   */
  private showToastError = (error: unknown): void => {
    this.toast.error(error as string);
  };

  /**
   * Shows a toast message with a success.
   *
   * @param {unknown} error - The success message to display.
   */
  private showSuccessError = (error: unknown): void => {
    this.toast.success(error as string);
  };

  /**
   * Handles the user sign-in when the input data is invalid.
   *
   * @param {Record<string, string>} formErrors - The validation errors.
   */
  private handleInvalidSignIn = (formErrors: Record<string, string>): void => {
    showFormErrors(formErrors);
  };
}

export default AuthController;
