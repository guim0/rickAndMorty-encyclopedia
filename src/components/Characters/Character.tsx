import "../../styles/CharacterCard.scss";
import { ICharacters } from "./Characters";

export default function Character(props: ICharacters) {
  const lifeSign = (status: string) => {
    if (status === "unknown") return "unknown";
    if (status === "Alive") return "alive";
    if (status === "Dead") return "dead";
  };

  return (
    <section className="card">
      <img src={props.image} alt={`${props.name} Photo`} />
      <div className="text-container">
        <div>
          <h4>Name: {props.name}</h4>

          <p className="species"> Specie: {props.species}</p>
          <div className="status">
            <span className={lifeSign(props.status)}></span>
            {props.status}
          </div>
        </div>
        <p className="origin"> Origin: {props.origin.name}</p>
      </div>
    </section>
  );
}
