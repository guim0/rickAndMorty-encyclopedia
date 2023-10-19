import "../../styles/CharacterCard.scss";
import { ICharacters } from "./Characters";

export default function Character(props: ICharacters) {
  const lifeSign = (status: string) => {
    if (status === "unknown") return "unknown";
    if (status === "Alive") return "alive";
    if (status === "Dead") return "dead";
  };

  return (
    <section className="w-100 max-w-sm rounded bg-gray-700">
      <img
        src={props.image}
        alt={`${props.name} Photo`}
        className="rounded-b-none rounded-t-sm "
      />
      <div className="m-2 text-white">
        <div>
          <p className="mb-3 text-lg">Name: {props.name}</p>

          <p className="mb-1"> Specie: {props.species}</p>
          <div className="flex items-center gap-2 mb-3">
            <span className={lifeSign(props.status)}></span>
            {props.status}
          </div>
        </div>
        <p className="text-ellipsis"> Origin: {props.origin.name}</p>
      </div>
    </section>
  );
}
