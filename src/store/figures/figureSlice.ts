import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiguresDataStructures, FiguresStateStructure } from "../../types";

export const initialFiguresState: FiguresStateStructure = {
  figuresData: [],
  figureData: {
    id: "",
    user: "",
    title: "",
    character: "",
    franchise: "",
    purchased: false,
    manufacturer: "",
    material: "",
    size: 0,
    weight: 0,
    price: 0,
    image: "",
  },
  length: 0,
  filter: false,
};

const figureSlice = createSlice({
  name: "figure",
  initialState: initialFiguresState,
  reducers: {
    loadFigures: (
      currentFiguresState,
      action: PayloadAction<
        Pick<FiguresStateStructure, "figuresData" | "length">
      >
    ) => ({
      ...currentFiguresState,
      figuresData: action.payload.figuresData,
      length: action.payload.length,
    }),

    loadFigureById: (
      currentFiguresState,
      action: PayloadAction<FiguresDataStructures>
    ) => ({
      ...currentFiguresState,
      figureData: action.payload,
    }),

    loadFiguresFilter: (currentFiguresState) => ({
      ...currentFiguresState,
      filter: !currentFiguresState.filter,
    }),

    deleteFigure: (currentFiguresState, action: PayloadAction<string>) => ({
      ...currentFiguresState,
      figuresData: currentFiguresState.figuresData.filter(
        (figure) => figure.id !== action.payload
      ),
    }),

    addFigure: (
      currentFiguresState,
      action: PayloadAction<FiguresDataStructures>
    ) => ({
      ...currentFiguresState,
      figuresData: [...currentFiguresState.figuresData, action.payload],
    }),
  },
});

export const {
  loadFigures: loadFiguresActionCreator,
  deleteFigure: deleteFigureActionCreator,
  addFigure: addFigureActionCreator,
  loadFiguresFilter: loadFiguresFilterActionCreator,
  loadFigureById: loadFigureByIdActionCreator,
} = figureSlice.actions;

export const figureReducer = figureSlice.reducer;
