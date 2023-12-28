export type Id = string;

export interface UserLoggedStructured {
  id: Id;
  username: string;
  token: string;
  isLogged: boolean;
}

export interface UserCredentialsStructure
  extends Pick<UserLoggedStructured, "username"> {
  password: string;
}

export type UserDataStructure = Pick<UserLoggedStructured, "username" | "id">;

export type UserTokenStructure = Omit<UserLoggedStructured, "isLogged">;

export interface FiguresStateStructure {
  figuresData: FiguresDataStructures[];
  figureData: FiguresDataStructures;
  totalFigures?: number;
  filter?: boolean;
}

export interface FiguresDataStructures {
  id: Id;
  user: string;
  title: string;
  character: string;
  franchise: string;
  isPurchased: boolean;
  manufacturer: string;
  material: string;
  size: number;
  weight: number;
  price: number;
  image: string;
}
export type FigureAddDataStructure = Omit<FiguresDataStructures, "id" | "user">;
