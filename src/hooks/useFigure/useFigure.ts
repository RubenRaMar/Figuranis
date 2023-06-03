import axios from "axios";
import { useAppSelector } from "../../store";
import { FiguresDataStructures } from "../../types";
import { useCallback } from "react";

const useFigures = () => {
  const token = useAppSelector((state) => state.user.token);
  const apiUrl = import.meta.env.VITE_API_URL;

  const figuresApi = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: `Bearer ${token}` },
  });

  const getFigureList = useCallback(async (): Promise<
    FiguresDataStructures[]
  > => {
    const {
      data: { figures },
    } = await figuresApi.get<{ figures: FiguresDataStructures[] }>(
      `${apiUrl}/figures`
    );

    return figures;
  }, [apiUrl, figuresApi]);

  return { getFigureList };
};

export default useFigures;
