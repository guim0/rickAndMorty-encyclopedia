import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
  const fetchCharacters = async ({ queryKey }: any) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`
    );

    return response.json();
  };

  const { data, status, isPreviousData } = useQuery({
    queryKey: ["characters", page],
    queryFn: fetchCharacters,
  });

  if (status === "loading") return <div> loading ...</div>;
  if (status === "error") return <div>Something went wrong 😢</div>;

  return (
    <section className="container">
      <h1>Rick and Morty</h1>

      <div className="characters">
        {data?.results.map((character: ICharacters) => (
          <Character {...character} />
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
