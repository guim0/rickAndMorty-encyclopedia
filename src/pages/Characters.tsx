import { useEffect, useState } from "react";
import Character from "../components/Characters/Character";
import { Characters, ICharacters } from "../components/Characters/Characters";
import { GoBack } from "../components/Dumb/goBack";
import { Filter } from "../components/Filter";
import "../styles/CharactersPage.scss";

export const CharactersPage = () => {
  const [filteredList, setFilteredList] = useState<[] | undefined>([]);

  const handleListing = () => {
    if (filteredList && filteredList.length !== 0) {
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "2rem",
          }}
        >
          {filteredList?.map((character: ICharacters, idx: number) => (
            <Character key={idx} {...character} />
          ))}
        </div>
      );
    } else {
      <Characters />;
    }
  };

  useEffect(() => {
    handleListing();
  }, []);

  return (
    <>
      <GoBack />
      <div className="headlines">
        <h1 className="title">Characters</h1>

        <Filter newData={setFilteredList} />
      </div>

      {filteredList && filteredList?.length > 0 ? (
        handleListing()
      ) : (
        <Characters />
      )}
    </>
  );
};
