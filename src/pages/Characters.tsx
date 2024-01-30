import { useState } from "react";
import { useCharacters } from "../api/Character";
import { useGetCharacter } from "../api/Filter/getCharacter";
import { Characters } from "../components/Characters/Characters";
import { GoBack } from "../components/Dumb/goBack";
import { Filter } from "../components/Filter";
import { Pagination } from "../components/Pagination";

export const CharactersPage = () => {
  const [nameFiltered, setNameFiltered] = useState("i");
  const [page, setPage] = useState(1);
  const [pageFilter, setPageFilter] = useState(1);

  const { data, isLoading, isPreviousData, status } = useCharacters(page);
  const {
    data: filteredData,
    isLoading: filterLoading,
    handleClear,
  } = useGetCharacter(nameFiltered, pageFilter);

  const handleData = () => {
    if (isLoading) return [];
    if (!nameFiltered && nameFiltered.length <= 2) return data?.results;
    return filteredData?.results;
  };

  return (
    <main className="w-full bg-gray-800">
      <GoBack />
      <div className="text-center">
        <h1 className="text-white text-5xl">Characters</h1>

        <Filter nameFiltered={setNameFiltered} clear={handleClear} />
      </div>
      <Characters
        data={handleData()}
        isLoading={isLoading || filterLoading}
        isPreviousData={isPreviousData}
        status={status}
      />
      <Pagination
        next={!data?.info.next}
        page={!nameFiltered && nameFiltered.length < 2 ? page : pageFilter}
        isPreviousData={isPreviousData}
        setPage={
          !nameFiltered && nameFiltered.length < 2 ? setPage : setPageFilter
        }
      />
    </main>
  );
};
