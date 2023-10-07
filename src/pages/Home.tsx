import RickAndMortyLogo from "../assets/logo.png";
import "../styles/Home.scss";

export const Home = () => {
  return (
    <section className="container">
      <div className="headlines">
        <h1>Welcome</h1>
        <h3>
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
        <h3>
          <ul>
            <li>The Characters</li>
            <li>The Locations</li>
            <li>The Episodes</li>
          </ul>
        </h3>
      </div>
    </section>
  );
};
