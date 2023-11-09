import { useState } from "react";
import { useEpisodes } from "../api/Episodes";
import { Loading } from "../components/Loading";

export const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useEpisodes(page);

  if (isLoading) return <Loading isLoading={isLoading} />;
  return (
    <main className="bg-gray-800 h-screen">
      <section className="text-center text-white">
        <h1 className="text-6xl ">Episodes!</h1>
        <p className="text-3xl">
          This page i'll provide all the info you need about the episodes from
          Rick and Morty
        </p>

        <div className="flex flex-wrap justify-evenly">
          {/* {data?.results.map((items: IEpisodeCard, idx) => (
            <>
              <Card key={idx} {...items} />
            </>
          ))} */}
        </div>
      </section>
    </main>
  );
};
