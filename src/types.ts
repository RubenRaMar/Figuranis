export interface UserCredentialsStructure {
  username: string;
  password: string;
}

export interface UserTokenStructure {
  id: string;
  username: string;
  token: string;
}

export interface UserLoggedStructured extends UserTokenStructure {
  isLogged: boolean;
}
