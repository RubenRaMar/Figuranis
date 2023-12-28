export interface PaginationStructure {
  page: number;
  totalFiguresToShow: number;
}

export interface ImageStructure {
  src: string;
  alt: string;
}

export interface UiModalStructure {
  isModal: boolean;
  isError: boolean;
  message: string;
  image: ImageStructure;
}

export interface UiStructure {
  isLoading: boolean;
  modal: UiModalStructure;
  pagination: PaginationStructure;
}
