import { Link } from "react-router-dom";
import RickAndMortyLogo from "../assets/logo.png";
import { Routes } from "../routes";
import "../styles/Home.scss";
export const Home = () => {
  return (
    <main className="bg-gray-800 h-screen">
      <div className="text-center text-white py-8">
        <p className="text-6xl mb-2">Welcome</p>
        <h3 className="text-2xl py-2">
          This is my version of being aware of what is happening on the universe
          of:
        </h3>
        <img
          className="logo-rick"
          src={RickAndMortyLogo}
          alt="logo rick and morty"
        />
      </div>
      <div className="about">
        <h2>Here you i'll find:</h2>
        <div className="links">
          <ul>
            <Link to={Routes.CHARACTERS}>
              <li>The Characters</li>
            </Link>
            <Link to={Routes.LOCATIONS}>
              <li>The Locations</li>
            </Link>

            <Link to={Routes.EPISODES}>
              <li>The Episodes</li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
};
