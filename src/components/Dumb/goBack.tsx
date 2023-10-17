import { Link } from "react-router-dom";

export const GoBack = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <h2
        style={{
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "400",
          padding: "1.5rem 2rem",
        }}
      >
        {" "}
        ⬅ Return to Home
      </h2>
    </Link>
  );
};
