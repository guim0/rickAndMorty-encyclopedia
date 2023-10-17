import { useState } from "react";
import { useLocations } from "../api/Location";
import { Pagination } from "./Pagination";
interface ILocationCard {
  id: number;
  name: string;
  type: string;
  dimesion: string;
}
const LocationCard = ({ id, name }: ILocationCard) => {
  <>
    <div className="location_card" key={id}>
      <h2 className="location_name">{name}</h2>
    </div>
  </>;
};

export const Location = () => {
  const [page, setPage] = useState(1);

  const { data, status, isPreviousData, isLoading } = useLocations(page);

  return (
    <>
      <section className="location_container"></section>
      <Pagination
        page={page}
        isPreviousData={isPreviousData}
        setPage={setPage}
      />
    </>
  );
};
