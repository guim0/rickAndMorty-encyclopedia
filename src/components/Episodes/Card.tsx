import { useState } from "react";

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
  const [ids, setIds] = useState([]);

  const smallPreviewCharacters = async () => {
    // return (
  };

  //   <>
  //     <ul>
  //       {slided.map((i, idx) => (
  //         <li key={idx}>{i.name}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return (
    <section key={id} className="w-[650px] h-[300px]">
      <div className="flex max-w-[400px] items-center w-full bg-green-200">
        <div className="text-md text-black flex flex-col text-center w-[150px] ">
          <p className="font-bold text-lg">Episode</p>
          <p className="   text-md">{name}</p>
        </div>
        <div className="text-md text-black flex flex-col text-center w-[150px] ">
          <p className="font-bold text-lg">When it Came</p>
          <p className="    text-md">{air_date}</p>
        </div>
        <div className="text-md text-black flex flex-col text-center w-[150px] ">
          <p className="font-bold text-lg">Metric</p>
          <p className="    text-md">{episode}</p>
        </div>
      </div>

      {/* TODO: Add dropdown with characters */}
      {dropdown && (
        <div className="bg-gray-300 max-w-[400px] px-2 rounded-b-md">
          <div className="w-full flex items-center justify-between">
            <p>Show preview characters</p>
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
          {dropdown ? <>{smallPreviewCharacters()}</> : null}
        </div>
      )}
    </section>
  );
};
