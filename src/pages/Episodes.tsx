import { useCallback, useState } from "react";
import { useEpisodes } from "../api/Episodes";
import { Card, IEpisodeCard } from "../components/Episodes/Card";
import { Loading } from "../components/Loading";
import { GoBack } from "../components/Dumb/goBack";
import { Pagination } from "../components/Pagination";

export const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isPreviousData } = useEpisodes(page);

  const renderEpisodes = useCallback(() => {
    if (isLoading) return <Loading isLoading={isLoading} />;

    return data.results.map((items: IEpisodeCard, idx: number) => (
      <Card key={idx} {...items} />
    ));
  }, [data]);

  if (isLoading) return <Loading isLoading={isLoading} />;
  return (
    <main className="w-full bg-slate-800">
      <div>
        <GoBack />
      </div>
      <div className="text-center py-6">
        <h1 className="text-6xl mb-4  text-white">Episodes</h1>
        <p className="text-3xl text-white font-light">
          Here you'll find, episode name, when it came out and how to find on
          your streaming service, also mention the characters on each episode.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {renderEpisodes()}
      </div>

      <Pagination
        next={!data?.info.next}
        page={page}
        isPreviousData={isPreviousData}
        setPage={setPage}
      />
    </main>
  );
};
