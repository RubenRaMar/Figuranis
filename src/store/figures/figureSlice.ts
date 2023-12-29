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
    isPurchased: false,
    manufacturer: "",
    material: "",
    size: 0,
    weight: 0,
    price: 0,
    image: "",
  },
  totalFigures: 0,
  isPurchasedFilter: undefined,
};

const figureSlice = createSlice({
  name: "figure",
  initialState: initialFiguresState,
  reducers: {
    loadFigures: (
      currentFiguresState,
      action: PayloadAction<
        Pick<FiguresStateStructure, "figuresData" | "totalFigures">
      >
    ) => ({
      ...currentFiguresState,
      figuresData: action.payload.figuresData,
      totalFigures: action.payload.totalFigures,
    }),
    loadFigureById: (
      currentFiguresState,
      action: PayloadAction<FiguresDataStructures>
    ) => ({
      ...currentFiguresState,
      figureData: action.payload,
    }),
    loadFiguresIsPurchased: (currentFiguresState) => ({
      ...currentFiguresState,
      isPurchasedFilter: !currentFiguresState.isPurchasedFilter,
    }),
    resetFiguresIsPurchased: (currentFiguresState) => ({
      ...currentFiguresState,
      isPurchasedFilter: undefined,
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
  loadFiguresIsPurchased: loadFiguresIsPurchasedActionCreator,
  resetFiguresIsPurchased: resetFiguresIsPurchasedActionCreator,
  loadFigureById: loadFigureByIdActionCreator,
} = figureSlice.actions;

export const figureReducer = figureSlice.reducer;
