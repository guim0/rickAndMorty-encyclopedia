import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/queryKeys";

export const useLocations = (page: number) => {
  const fetchLocations = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );

    const data = response.json();
    return data;
  };

  const { data, status, isPreviousData, isLoading } = useQuery(
    [QUERY_KEY.locations, page],
    fetchLocations
  );

  return {
    data,
    status,
    isPreviousData,
    isLoading,
  };
};
