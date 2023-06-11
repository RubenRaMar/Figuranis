import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FigureFilterStructure, FiguresDataStructures } from "../../types";

export const initialFiguresState: FigureFilterStructure = {
  figuresData: [],
};

const figureSlice = createSlice({
  name: "figure",
  initialState: initialFiguresState,
  reducers: {
    loadFigures: (
      currentFiguresState,
      action: PayloadAction<FiguresDataStructures[]>
    ) => ({
      ...currentFiguresState,
      figuresData: action.payload,
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
} = figureSlice.actions;

export const figureReducer = figureSlice.reducer;
