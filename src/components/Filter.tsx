import { useState } from "react";
import { toast } from "react-toastify";
import { useGetCharacter } from "../api/Filter/getCharacter";
import searchIcon from "../assets/lupa.png";
import "../styles/Filter.scss";

interface IFilter {
  newData: (data?: any) => void;
}

export const Filter = ({ newData }: IFilter) => {
  const [name, setName] = useState("");

  const { handleInputChange, handleClear, data } = useGetCharacter();

  const handleSubmit = async (value: string) => {
    if (value.length <= 2)
      return toast("3 ou mais caracteres necessários.", {
        type: "info",
        autoClose: 3200,
        theme: "dark",
      });
    await handleInputChange(value);
    console.log(data);
    if (data) {
      return newData(data);
    } else {
      return newData([]);
    }
  };

  return (
    <>
      <label htmlFor="search" className="text-lg text-white mt-8">
        Search for a character
      </label>

      <section className="flex items-center justify-center">
        <input
          type="text"
          className="px-2 py-3 my-3 mx-3 rounded-md max-w-xs w-full border border-gray-700 text-white bg-transparent"
          placeholder="Type the name of Character"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <div
          role="button"
          onClick={() => {
            name.length >= 2 && handleSubmit(name);
          }}
          className={name.length <= 2 ? "disabled_button" : "button_search"}
        >
          <img src={searchIcon} alt="Lupa" />
        </div>

        <div
          role="button"
          onClick={() => {
            name.length > 0 ? (handleClear(), setName("")) : null;
          }}
          className={
            name.length > 0
              ? "cursor-pointer rounded  px-2 py-2 bg-slate-400 mx-3"
              : "cursor-not-allowed rounded  px-2 py-2 bg-slate-200 mx-3"
          }
        >
          <span className="text-white text-sm">Limpar</span>
        </div>
      </section>
    </>
  );
};
