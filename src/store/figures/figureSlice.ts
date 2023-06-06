import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiguresDataStructures, FiguresStateStructure } from "../../types";

export const initialFiguresState: FiguresStateStructure = { figuresData: [] };

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

    deleteFigure: (currentFiguresState, action: PayloadAction<string>) => ({
      ...currentFiguresState,
      figuresData: currentFiguresState.figuresData.filter(
        (figure) => figure.id !== action.payload
      ),
    }),
  },
});

export const { loadFigures: loadFiguresActionCreator } = figureSlice.actions;
export const { deleteFigure: deleteFigureActionCreator } = figureSlice.actions;

export const figureReducer = figureSlice.reducer;
