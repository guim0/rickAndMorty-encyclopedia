import { useState } from "react";
import { useCharacters } from "../api/Character";
import "../styles/CharactersPage.scss";
import Character from "./Character";
import { Loading } from "./Loading";
import { Pagination } from "./Pagination";

export type ICharacters = {
  id: number;
  name: string;
  image: string;
  status: "Alive" | "Dead" | "unknown";
  gender: string;
  species: string;
  origin: { name: string };
};

export const Characters = () => {
  const [page, setPage] = useState(1);

  const { data, status, isPreviousData, isLoading } = useCharacters(page);

  if (status === "loading") return <Loading isLoading={isLoading} />;
  if (status === "error") return <div>Something went wrong 😢</div>;
  return (
    <>
      <div className="characters">
        {data?.results.map((character: ICharacters, idx: number) => (
          <Character key={idx} {...character} />
        ))}
      </div>
      <Pagination
        page={page}
        isPreviousData={isPreviousData}
        setPage={setPage}
      />
    </>
  );
};
