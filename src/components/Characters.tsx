import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCharacters } from "../api/fetchAllCharacter";
import RickAndMortyLogo from "../assets/logo.png";
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

export default function Characters() {
  const [page, setPage] = useState(1);

  const queryKey = ["characters", page];
  const queryFn = () => fetchCharacters(queryKey, page);
  const { data, status, isPreviousData } = useQuery(queryKey, queryFn);

  if (status === "loading") return <div> loading ...</div>;
  if (status === "error") return <div>Something went wrong 😢</div>;

  return (
    <section className="container">
      <div className="headlines">
        <h1>Welcome</h1>
        <h3>
          This is my version of being aware of what is happening on Rick and
          Morty universe
        </h3>
        <img
          className="logo-rick"
          src={RickAndMortyLogo}
          alt="logo rick and morty"
        />
        <h2>Characters</h2>
      </div>

      <div className="characters">
        {data?.results.map((character: ICharacters, idx: number) => (
          <Character key={idx} {...character} />
        ))}
      </div>

      <footer className="pagination">
        {
          <li>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Prev
            </button>
          </li>
        }
        <li>
          <span>Page {page}</span>
        </li>
        <li>
          <button
            disabled={isPreviousData && !data.info.next}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </li>
      </footer>
    </section>
  );
}
