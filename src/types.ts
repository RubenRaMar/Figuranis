export interface UserCredentialsStructure {
  username: string;
  password: string;
}

export interface UserDataStructure {
  id: string;
  username: string;
}

export interface UserTokenStructure extends UserDataStructure {
  token: string;
}

export interface UserLoggedStructured extends UserTokenStructure {
  isLogged: boolean;
}

export interface FiguresDataStructures {
  id: string;
  title: string;
  character: string;
  franchise: string;
  purchased: boolean;
  manufacturer: string;
  material: string;
  size: number;
  weight: number;
  price: number;
  image: string;
  user: string;
}

export interface FiguresStateStructure {
  figuresData: FiguresDataStructures[];
}
