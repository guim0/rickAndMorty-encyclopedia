import { Location } from "../components/Location";
import { GoBack } from "../components/goBack";
import "../styles/LocationPage.scss";

export const LocationsPage = () => {
  return (
    <>
      <GoBack />
      <main className="container">
        <h1>Location</h1>
        <p>Here lies the locations available on the Rick and Morty universe</p>
        <Location />
      </main>
    </>
  );
};
