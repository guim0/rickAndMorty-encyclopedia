import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useGetCharacter } from "../api/Filter/getCharacter";
import searchIcon from "../assets/lupa.png";
import "../styles/Filter.scss";

interface IFilter {
  newData: (data?: any) => void;
}

export const Filter = ({ newData }: IFilter) => {
  const [name, setName] = useState("");

  const { handleInputChange, newList } = useGetCharacter();
  console.log("1", newList);

  const handleSubmit = useCallback(
    async (value: string) => {
      if (value.length <= 2)
        return toast("3 ou mais caracteres necessários.", {
          type: "info",
          autoClose: 3200,
          theme: "dark",
        });
      await handleInputChange(value);
      if (newList.length > 0) {
        return newData(newList);
      } else {
        return newData([]);
      }
    },
    [newList]
  );

  return (
    <>
      <label htmlFor="search">Search for a character</label>

      <section className="input_container">
        <input
          type="text"
          className="search_input"
          placeholder="Type the name of Character"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
        <div
          onClick={() => {
            name.length >= 2 && handleSubmit(name);
          }}
          className={name.length <= 2 ? "disabled_button" : "button_search"}
        >
          <img src={searchIcon} alt="Lupa" />
        </div>
      </section>
    </>
  );
};
