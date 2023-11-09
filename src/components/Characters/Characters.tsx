import { Loading } from "../Loading";
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

type ICharactersListing = {
  isLoading: boolean;
  isPreviousData: boolean;
  data: ICharacters[];
  status: "error" | "success" | "loading";
};

export const Characters = ({ status, isLoading, data }: ICharactersListing) => {
  if (isLoading || status === "loading")
    return <Loading isLoading={isLoading} />;

  if (status === "error") return <div>Something went wrong 😢</div>;
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        {data?.map((character: ICharacters, idx: number) => (
          <Character key={idx} {...character} />
        ))}
      </div>
    </>
  );
};
