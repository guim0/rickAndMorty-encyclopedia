import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { QUERY_KEY } from "../../constants/queryKeys";

export const useGetCharacter = (nameFilter: string = "i", page: number = 1) => {
  const fetchFindCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${nameFilter}`
    );

    const data = await response.json();

    if (response.status !== 200) {
      toast("Não encontrado.", {
        theme: "dark",
        autoClose: 3200,
        type: "error",
      });
    } else return data;
  };

  const { data, isLoading } = useQuery(
    [QUERY_KEY.filterCharacter, nameFilter],
    fetchFindCharacter
  );

  const handleClear = useCallback(() => {
    nameFilter = "";
    page = 1;
  }, []);

  return {
    handleInputChange: fetchFindCharacter,
    handleClear,
    data,
    isLoading,
  };
};
