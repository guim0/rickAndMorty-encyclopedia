import { useState } from "react";
import { useEpisodes } from "../api/Episodes";
import { Card, IEpisodeCard } from "../components/Episodes/Card";
import { Loading } from "../components/Loading";

export const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useEpisodes(page);

  const renderEpisodes = () => {
    if (!data?.results || isLoading) return <Loading isLoading={isLoading} />;

    return data?.results.map((items: IEpisodeCard, idx: number) => (
      <>
        <Card key={idx} {...items} />
      </>
    ));
  };

  if (isLoading) return <Loading isLoading={isLoading} />;
  return (
    <main className="max-w-[1920px] h-auto md:h-screen bg-slate-800">
      <section className="w-full ">
        <div className="text-center py-6">
          <h1 className="text-6xl mb-4  text-white">Episodes!</h1>
          <p className="text-3xl text-white font-light">
            This page i'll provide all the info you need about the episodes from
            Rick and Morty
          </p>
        </div>
        <div className="flex flex-wrap justify-center">{renderEpisodes()}</div>
      </section>
    </main>
  );
};
