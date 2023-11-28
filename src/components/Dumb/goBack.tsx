import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/back-button.png";

export const GoBack = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="p-5  w-16">
        <img src={BackIcon} alt="Retornar" />
      </div>
    </Link>
  );
};
