import "../../styles/CharacterCard.scss";
import { ICharacters } from "./Characters";

export function Character(props: ICharacters) {
  const lifeSign = (status: string) => {
    if (status === "unknown") return "unknown";
    if (status === "Alive") return "alive";
    if (status === "Dead") return "dead";
  };

  return (
    <section className="w-max-[400px] w-min-[300px] min-w-[250px] bg-gray-700 rounded">
      <div className="w-full flex md:flex-col">
        <img
          src={props.image}
          alt={`${props.name} Photo`}
          className="w-[180px] md:rounded-full md:mx-auto md:my-3"
        />
        <div className="m-2 text-white w-full">
          <div>
            <p className="mb-3 text-lg">Name: {props.name}</p>

            <p className="mb-1"> Species: {props.species}</p>
            <div className="flex items-center gap-2 mb-3">
              <span className={lifeSign(props.status)}></span>
              {props.status}
            </div>
          </div>
          <p className="text-ellipsis w-[90%]"> Origin: {props.origin.name}</p>
        </div>
      </div>
    </section>
  );
}
