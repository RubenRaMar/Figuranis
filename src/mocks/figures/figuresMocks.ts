import { FiguresDataStructures, FiguresStateStructure } from "../../types";
import { figuresMocksFactory } from "../factory/factories";

export const figuresFactoryMock: FiguresDataStructures[] =
  figuresMocksFactory(4);

export const initialFiguresDataStateMock: FiguresDataStructures = {
  id: "",
  user: "",
  title: "",
  character: "",
  franchise: "",
  isPurchased: false,
  manufacturer: "",
  material: "",
  size: 0,
  weight: 0,
  price: 0,
  image: "",
};

export const initialFiguresStateMock: FiguresStateStructure = {
  figuresData: [],
  figureData: initialFiguresDataStateMock,
  totalFigures: 0,
  filter: false,
};

export const currentFigureStateMock: FiguresStateStructure = {
  ...initialFiguresStateMock,
  figuresData: figuresFactoryMock,
};

export const figuresMock: FiguresDataStructures[] = [
  {
    id: "60b8f9b43b58a71331a7cd49",
    title: "One Piece XS Studio Zoro",
    character: "Zoro",
    franchise: "One Piece",
    isPurchased: true,
    manufacturer: "XS Studio",
    material: "Resin",
    size: 38,
    weight: 5.87,
    price: 295,
    image:
      "https://cdn.discordapp.com/attachments/1114553336134369300/1114554223745585212/zoro.webp",
    user: "646fc50910c8e8c5b17d54a7",
  },

  {
    id: "60b8f9b43b58a71331a7c1f5",
    title: "Metroid Dread Creation Studio Samus Aran",
    character: "Samus Aran",
    franchise: "Metroid Dread",
    isPurchased: false,
    manufacturer: "Creation Studio",
    material: "Resin",
    size: 55,
    weight: 11.67,
    price: 851.72,
    image:
      "https://cdn.discordapp.com/attachments/1114553336134369300/1114554010863665274/aran.webp",
    user: "646fc50910c8e8c5b17d54a7",
  },
  {
    id: "60b8f9b43b58a71331a7c2e3",
    title: "Naruto Madara JIYI Studio",
    character: "Madara",
    franchise: "Naruto",
    isPurchased: false,
    manufacturer: "JIYI Studio",
    material: "Resin + LED",
    size: 62,
    weight: 11.87,
    price: 665,
    image:
      "https://cdn.discordapp.com/attachments/1114553336134369300/1114554098205851679/madara.webp",
    user: "646fc50910c8e8c5b17d54a7",
  },
  {
    id: "60b8f9b43b58a71331a7c4b9",
    title: "Dragon Ball DMS Vegeta Blue, Evolution and UltraEgo",
    character: "Vegeta Blue",
    franchise: "Dragon Ball",
    isPurchased: true,
    manufacturer: "Dim Model Studio",
    material: "Resin",
    size: 46,
    weight: 6.89,
    price: 625.76,
    image:
      "https://cdn.discordapp.com/attachments/1114553336134369300/1114553690297217118/vegeta.webp",
    user: "646fc50910c8e8c5b17d54a7",
  },
];

export const twentyFigures: FiguresDataStructures[] = figuresMocksFactory(20);
