import { GoBack } from "../components/Dumb/goBack";
import { Location } from "../components/Locations/Location";

export const LocationsPage = () => {
  return (
    <main className="w-full h-auto lg:h-screen bg-slate-800">
      <GoBack />
      <main className="text-center text-white">
        <h1 className="text-6xl">Location</h1>
        <p className="text-2xl font-thin my-3">
          Here lies the locations available on the Rick and Morty universe
        </p>
        <Location />
      </main>
    </main>
  );
};
