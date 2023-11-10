import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { QUERY_KEY } from "../../constants/queryKeys";

export const useGetCharacter = (nameFilter: string = "i", page: number = 1) => {
  const fetchFindCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${nameFilter}`
    );

    if (response.status !== 200) {
      toast("Não encontrado.", {
        theme: "dark",
        autoClose: 3200,
        type: "error",
      });
    }
    const data = await response.json();
    return data;
  };

  const { data, isLoading } = useQuery(
    [QUERY_KEY.filterCharacter, [nameFilter, page]],
    fetchFindCharacter
  );

  const handleClear = () => {
    window.location.reload();
  };

  return {
    handleInputChange: fetchFindCharacter,
    handleClear,
    data,
    isLoading,
  };
};
