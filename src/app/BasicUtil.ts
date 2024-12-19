import { AuthData } from "./authData";

export function sum(a: number, b: number): number {
  return a + b;
}

export function authenticateLogin(
  username: string,
  password: string
): AuthData {
  let authStatus = false;

  if (username === "six" && password === "six") {
    authStatus = true;
  }

  return {
    usernameToLowerCase: username.toLowerCase(),
    userDetails: { username: username, password: password },
    usernameCharacters: username.split(""),
    isAuthenticated: authStatus,
  };
}

export class UsernameToLowerCase {
  public ToLowerCase(username: string) {
    if (username === "") {
      throw new Error("Invalid username");
    }

    return username.toLowerCase();
  }
}
