import { Link } from "react-router-dom";
import { useCharacters } from "../api/Character";
import RickAndMortyLogo from "../assets/logo.png";
import Character from "../components/Characters/Character";
import { ICharacters } from "../components/Characters/Characters";
import { Loading } from "../components/Loading";
import { Routes } from "../routes";
import "../styles/Home.scss";
export const Home = () => {
  const { data, isLoading } = useCharacters(1);
  const previewCharacters = () => {
    if (!data?.results) return <Loading isLoading={isLoading} />;

    const dataSliced = data?.results.slice(1, 4);

    return dataSliced.map((items: ICharacters, idx: number) => (
      <Character {...items} key={idx} />
    ));
  };

  return (
    <main className="w-full h-auto lg:h-screen bg-slate-800">
      <nav className="max-w-[1440px] mx-auto my-0">
        <div className="links flex flex-wrap justify-center md:flex-nowrap md:justify-between px-6 w-full">
          <div className="max-w-[300px] min-w-[200px] m-0 p-0 ">
            <img src={RickAndMortyLogo} alt="logo" />
          </div>
          <ul className="flex justify-center items-center md:justify-evenly ">
            <Link to={Routes.CHARACTERS}>
              <li>Characters</li>
            </Link>
            <Link to={Routes.LOCATIONS}>
              <li>Locations</li>
            </Link>

            <Link to={Routes.EPISODES}>
              <li>Episodes</li>
            </Link>
          </ul>
        </div>
      </nav>

      <section className="container px-4">
        <h2 className="text-white text-3xl m-2 mb-10">
          What'll you find here?
        </h2>
        <div className="flex-col flex gap-10 mt-5">
          <p className="text-white text-2xl font-light ml-2 mb-[-20px]">
            Will be possible to visualize and search for Name on de "Characters"
            Page
          </p>
          <div className="flex flex-wrap justify-start gap-3">
            {previewCharacters()}
            <p className="text-white font-medium self-center md:self-end">
              And more, at the{" "}
              <a className="underline" href="/characters">
                Characters Page!
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
