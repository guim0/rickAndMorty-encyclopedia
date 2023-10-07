import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCharacters } from "../api/fetchAllCharacter";
import Character from "./Character";
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

export default function Characters() {
  const [page, setPage] = useState(1);

  const queryKey = ["characters", page];
  const queryFn = () => fetchCharacters(queryKey, 1);
  const { data, status, isPreviousData } = useQuery(queryKey, queryFn);

  if (status === "loading") return <div> loading ...</div>;
  if (status === "error") return <div>Something went wrong 😢</div>;

  return (
    <section className="container">
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
    </section>
  );
}
