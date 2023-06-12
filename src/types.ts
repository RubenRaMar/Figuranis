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
export interface FiguresStateStructure {
  figuresData: FiguresDataStructures[];
}

export interface FigureFilterStructure extends FiguresStateStructure {
  filter?: boolean;
}

export interface FigureDataStateStructure {
  figures: FiguresDataStructures[];
  length: number;
}

export interface FigureAddDataStructure {
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
}
export interface FiguresDataStructures extends FigureAddDataStructure {
  id: string;
  user: string;
}

export interface UiStructure {
  isLoading: boolean;
  modal: UiModalStructure;
}
export interface UiModalStructure {
  isModal: boolean;
  error: boolean;
  message: string;
}
