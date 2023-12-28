export type Id = string;

export interface UserCredentialsStructure {
  username: string;
  password: string;
}

export interface UserDataStructure {
  id: Id;
  username: string;
}

export interface UserTokenStructure extends UserDataStructure {
  token: string;
}

export interface UserLoggedStructured extends UserTokenStructure {
  isLogged: boolean;
}
export interface FiguresStateStructure {
  figuresData: FiguresDataStructures[];
  figureData: FiguresDataStructures;
  totalFigures?: number;
  filter?: boolean;
}

export interface FigureAddDataStructure {
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
export interface FiguresDataStructures extends FigureAddDataStructure {
  id: Id;
  user: string;
}

export interface UiStructure {
  isLoading: boolean;
  modal: UiModalStructure;
  pagination: PaginationStructure;
}

export interface PaginationStructure {
  skip: number;
  limit: number;
}
export interface UiModalStructure {
  isModal: boolean;
  error: boolean;
  message: string;
}
