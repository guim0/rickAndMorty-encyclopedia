import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/queryKeys";

export const useCharacters = (page: number) => {
  const fetchCharacters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = response.json();
    return data;
  };

  const { data, status, isPreviousData, isLoading } = useQuery(
    [QUERY_KEY.characters, page],
    fetchCharacters
  );

  return {
    data,
    status,
    isPreviousData,
    isLoading,
  };
};
