import { ImageStructure } from "../../store/ui/types";

export interface ModalMessageStructure {
  wrongCredentials: string;
  addCorrect: string;
  addError: string;
  modifyCorrect: string;
  modifyError: string;
  removeCorrect: string;
  removeError: string;
}

export interface ModalImagesSructure {
  wrongCredentials: ImageStructure;
  addCorrect: ImageStructure;
  addError: ImageStructure;
  modifyCorrect: ImageStructure;
  modifyError: ImageStructure;
  removeCorrect: ImageStructure;
  removeError: ImageStructure;
}
