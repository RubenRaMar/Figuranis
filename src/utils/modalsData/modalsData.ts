import { ModalImagesSructure, ModalMessageStructure } from "./types";

export const modalsMessage: ModalMessageStructure = {
  wrongCredentials: "Wrong credentials",
  addCorrect: "You have successfully added a new figure to your favorites list",
  addError: "Could not add new figure to your favorites list",
  modifyCorrect: "You have successfully modify your figure",
  modifyError: "Could not modify your figure",
  removeCorrect:
    "The figure has been successfully removed from the favorites list",
  removeError: "It has not been possible to remove the figure from the list",
};

export const modalsImages: ModalImagesSructure = {
  wrongCredentials: {
    src: "/images/modal/gotranks.svg",
    alt: "Skeletonized and disgruntled Gotranks",
  },
  addCorrect: {
    src: "/images/modal/luffy.svg",
    alt: "Kid Luffy celebrating",
  },
  addError: {
    src: "/images/modal/hero.svg",
    alt: "Kid Katsuki angry",
  },
  modifyCorrect: {
    src: "/images/modal/goku.svg",
    alt: "Kid Goku jumping and happy",
  },
  modifyError: {
    src: "/images/modal/gengar.svg",
    alt: "Gengar angry",
  },
  removeCorrect: {
    src: "/images/modal/arale.svg",
    alt: "Kid Arale happy and waving",
  },
  removeError: {
    src: "/images/modal/naruto.svg",
    alt: "Kid Naruto angry",
  },
};
