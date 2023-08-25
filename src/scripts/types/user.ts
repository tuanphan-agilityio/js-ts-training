interface User {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
}

interface UserSignIn {
  email: string;
  password: string;
}

interface UserResponse {
  accessToken: string;
  user: User;
}

export { User, UserSignIn, UserResponse };
