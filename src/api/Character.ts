import { useQuery } from "@tanstack/react-query";

export const useCharacters = (page: number) => {
  const queryKey = ["characters", page];

  const fetchCharacters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );

    const data = response.json();
    return data;
  };

  const { data, status, isPreviousData, isLoading } = useQuery(
    queryKey,
    fetchCharacters
  );

  return {
    data,
    status,
    isPreviousData,
    isLoading,
  };
};
