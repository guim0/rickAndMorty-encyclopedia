import { useQuery } from "@tanstack/react-query";

export const useLocations = (page: number) => {
  const queryKey = ["locations", page];
  const fetchLocations = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );

    const data = response.json();
    return data;
  };

  const { data, status, isPreviousData, isLoading } = useQuery(
    queryKey,
    fetchLocations
  );

  return {
    data,
    status,
    isPreviousData,
    isLoading,
  };
};
