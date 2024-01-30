import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/queryKeys";

export const useCharacterById = (id: number) => {
  const fetchCharacterById = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = response.json();
    return data;
  };

  const { data, status, isPreviousData, isLoading } = useQuery(
    [QUERY_KEY.characterById, id],
    fetchCharacterById
  );

  return {
    data,
    status,
    isPreviousData,
    isLoading,
  };
};
