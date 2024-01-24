import { Link } from "react-router-dom";
import { useCharacters } from "../api/Character";
import RickAndMortyLogo from "../assets/logo.png";
import Character from "../components/Characters/Character";
import { ICharacters } from "../components/Characters/Characters";
import { Loading } from "../components/Loading";
import { Routes } from "../routes";
import "../styles/Home.scss";
export const Home = () => {
  const { data, isLoading, isPreviousData, status } = useCharacters(1);
  const previewData = () => {
    if (!data?.results) return <Loading isLoading={isLoading} />;

    const dataSliced = data?.results.slice(1, 5);

    return dataSliced.map((items: ICharacters, idx: number) => (
      <Character {...items} key={idx} />
    ));
  };

  return (
    <main className="w-full h-screen">
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
        <div className="flex-col flex">
          <h1 className="text-white text-3xl text-center">
            This website is a attempt of listing the details from Rick And Morty
            universe.
          </h1>

          <h3 className="text-white text-2xl">Preview from Characters</h3>
          <p className="text-white text-1xl font-light ml-2">
            Will be possible to visualize and search for Name on de "Characters"
            Page
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {previewData()}
          </div>
        </div>
      </section>
    </main>
  );
};
