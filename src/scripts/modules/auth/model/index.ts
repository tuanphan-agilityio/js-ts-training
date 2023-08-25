import { UserResponse, UserSignIn } from '@/types';
import axiosApp from '@/services/axiosApp';
import { API_ENDPOINT } from '@/constants';

class AuthModel {
  /**
   * Signs in a user with the provided credentials.
   *
   * @param {UserSignIn} user - User credentials for authentication.
   * @returns {Promise<UserResponse>} A promise resolving to user response data.
   */
  signIn = (user: UserSignIn): Promise<UserResponse> => {
    const data = axiosApp.post<UserSignIn, UserResponse>(API_ENDPOINT.SIGN_IN, user);

    return data;
  };
}

export default AuthModel;
