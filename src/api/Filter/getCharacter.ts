import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { QUERY_KEY } from "../../constants/queryKeys";

export const useGetCharacter = () => {
  const [filterValue, setFilterValue] = useState("");

  const fetchFindCharacter = async (nameFilter: string) => {
    if (!nameFilter) return;
    if (filterValue === "i" && !nameFilter) setFilterValue(nameFilter);

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nameFilter}`
    ).then((response) =>
      response
        .json()
        .then((data) => ({ status: response.status, body: data.results }))
    );
    if (response.status !== 200) {
      toast("Não encontrado.", {
        theme: "dark",
        autoClose: 3200,
        type: "error",
      });
    }
    console.log(response.body);
    return response.body;
  };

  const { data } = useQuery([QUERY_KEY.filterCharacter, filterValue], () =>
    fetchFindCharacter(filterValue)
  );

  const handleClear = useCallback(() => {
    setFilterValue("i");
  }, []);

  return {
    handleInputChange: fetchFindCharacter,
    handleClear,
    data,
  };
};
