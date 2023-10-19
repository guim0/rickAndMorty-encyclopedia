export interface IEpisodeCard {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export const Card = ({ id, name, episode, air_date }: IEpisodeCard) => {
  return (
    <section key={id} className="rounded-md px-12 py-12 m-4 bg-sky-950">
      <div className="flex text-white bg-slate-500">
        <p className="text-sm">{name}</p>
        <p className="text-sm">{air_date}</p>
        <p className="text-sm">{episode}</p>
      </div>
    </section>
  );
};
