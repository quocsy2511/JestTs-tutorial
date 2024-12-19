export interface AuthData {
  usernameToLowerCase: string;
  usernameCharacters: Array<string>;
  userDetails: Object | undefined;
  isAuthenticated: boolean;
}
