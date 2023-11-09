import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/queryKeys";

export const useEpisodes = (page: number) => {
  const fetchEpisodes = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page${page}`
    );
    const data = response.json();
    return data;
  };

  const { data, isLoading } = useQuery(
    [QUERY_KEY.episodes, page],
    fetchEpisodes
  );

  return {
    data,
    isLoading,
  };
};
