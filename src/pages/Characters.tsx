import { Characters } from "../components/Characters";
import { GoBack } from "../components/goBack";
import "../styles/CharactersPage.scss";

export const CharactersPage = () => {
  return (
    <>
      <GoBack />
      <div className="headlines">
        <h1 className="title">Characters</h1>

        {/* <Filter/> TO-DO: Implement a filtering component*/}
      </div>

      <Characters />
    </>
  );
};
