import { useCallback, useEffect, useState } from "react";
import Character from "../components/Characters/Character";
import { Characters, ICharacters } from "../components/Characters/Characters";
import { GoBack } from "../components/Dumb/goBack";
import { Filter } from "../components/Filter";

export const CharactersPage = () => {
  const [filteredList, setFilteredList] = useState<[] | undefined>([]);

  const handleListing = useCallback(() => {
    if (filteredList && filteredList?.length > 0) {
      return (
        <div className="flex flex-wrap gap-3 justify-center">
          {filteredList?.map((character: ICharacters, idx: number) => (
            <Character key={idx} {...character} />
          ))}
        </div>
      );
    } else {
      <Characters />;
    }
  }, [filteredList]);

  useEffect(() => {
    handleListing();
  });

  return (
    <main className="h-auto bg-gray-800">
      <GoBack />
      <div className="text-center">
        <h1 className="text-white text-5xl">Characters</h1>

        <Filter newData={setFilteredList} />
      </div>

      {filteredList && filteredList?.length > 0 ? (
        handleListing()
      ) : (
        <Characters />
      )}
    </main>
  );
};
