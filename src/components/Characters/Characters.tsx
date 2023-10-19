import { useState } from "react";
import { useCharacters } from "../../api/Character";

import { Loading } from "../Loading";
import { Pagination } from "../Pagination";
import Character from "./Character";

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
      <div className="flex flex-wrap gap-3 justify-center">
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
