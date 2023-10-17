import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useGetCharacter = () => {
  const [filterValue, setFilterValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (filterValue === "") {
        return;
      }
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${filterValue}`
        );

        if (response.ok) {
          const data = await response.json();
          setNewList(data.results);
        }
      } catch (err) {
        if (err)
          toast("Algo deu errado! 😢", {
            type: "error",
            autoClose: 3500,
            theme: "dark",
          });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filterValue]);

  const handleInputChange = (value: string) => {
    if (value.length >= 2) return setFilterValue(value);
  };

  return {
    handleInputChange,
    isLoading,
    newList,
  };
};
