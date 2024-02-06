import { useEffect, useState } from "react";

import ArrowDownIcon from "../../assets/icons/arrow-down.png";
export interface IEpisodeCard {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
  characters: string[];
}

export const Card = ({
  id,
  name,
  episode,
  air_date,
  characters,
}: IEpisodeCard) => {
  const [dropdown, setDropdown] = useState(false);
  const [charactersFetched, setCharactersFetched] = useState([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let slicedArray = characters.slice(0, 5);
        const promises = slicedArray.map(async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        });

        const results = await Promise.all(promises);
        let names = results.map((i) => ({
          name: i.name,
          status: i.status,
          img: i.image,
        }));
        setCharactersFetched(names as []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacters();
  }, []);

  const lifeSign = (status: string) => {
    if (status === "unknown") return "bg-yellow-600";
    if (status === "Dead") return "bg-red-400";
    if (status === "Alive") return "bg-green-400";
  };
  const mapCharacters = () => {
    if (!charactersFetched) return "No Characters";

    return charactersFetched.map(
      (i: { name: string; status: string; img: string }) => (
        <>
          <ul
            className="font-medium text-sm w-[260px] mx-auto bg-gray-200  rounded-3xl "
            key={crypto.randomUUID()}
          >
            <li className="w-full pl-3">
              <div className=" mb-1 flex items-cented justify-between">
                <div className="flex items-center gap-2">
                  <span>{i.name}</span>
                  <span
                    className={`w-[10px] h-[10px] block rounded-full ${lifeSign(
                      i.status
                    )}`}
                  />
                </div>
                <img
                  className="w-[40px] rounded-full"
                  src={i.img}
                  alt={i.name}
                />
              </div>
            </li>
          </ul>
        </>
      )
    );
  };

  return (
    <section key={id} className="w-[490px] flex flex-col items-center mb-3">
      <div className="flex max-w-[400px] items-center w-full bg-green-200 rounded-t-md">
        <div className="text-black flex flex-col text-center w-[150px] ">
          <p className="font-bold text-lg">Episode</p>
          <p className="text-sm">{name}</p>
        </div>
        <div className="text-md text-black flex flex-col text-center w-[150px] ">
          <p className="font-bold text-lg">When it Came</p>
          <p className="text-sm">{air_date}</p>
        </div>
        <div className="text-md text-black flex flex-col text-center w-[150px] ">
          <p className="font-bold text-lg">Metric</p>
          <p className="text-sm">{episode}</p>
        </div>
      </div>
      <div className="bg-gray-300 max-w-[400px] w-full px-2 py-2 rounded-b-md">
        <div className="w-full flex items-center justify-between mb-2">
          <p className="text-sm pt-2">
            Some of the characters at this episode:
          </p>
          <div
            className="cursor-pointer"
            onClick={() => setDropdown(!dropdown)}
          >
            <img
              src={ArrowDownIcon}
              className="mx-auto my-0 w-[20px] bg-white p-1 rounded-full border-black"
              alt=""
            />
          </div>
        </div>
        {dropdown ? <>{mapCharacters()}</> : null}
      </div>
    </section>
  );
};
