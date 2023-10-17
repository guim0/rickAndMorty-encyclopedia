import { useState } from "react";
import { useLocations } from "../../api/Location";
import "../../styles/LocationCard.scss";
import { Loading } from "../Loading";
import { Pagination } from "../Pagination";
interface ILocationCard {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
const LocationCard = ({ name, dimension, type, residents }: ILocationCard) => {
  return (
    <>
      <section className="location_card">
        <div>
          <h2>{name}</h2>
        </div>
        <div className="location_details">
          <div>
            <h2>Dimesion:</h2>
            <p>{dimension}</p>
          </div>
          <div>
            <h2>Type:</h2>
            <p>{type}</p>
          </div>
          <div>
            <h2>Residents:</h2>
            <p>{residents.length}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const Location = () => {
  const [page, setPage] = useState(1);

  const { data, status, isPreviousData, isLoading } = useLocations(page);

  if (isLoading || status === "loading")
    return <Loading isLoading={isLoading} />;
  if (status === "error")
    return (
      <>
        <h1>Something went wrong 😢</h1>
      </>
    );
  return (
    <>
      <section className="location_container">
        {data?.results.map((data: ILocationCard, idx: number) => (
          <LocationCard key={idx} {...data} />
        ))}
      </section>
      <Pagination
        page={page}
        isPreviousData={isPreviousData}
        setPage={setPage}
      />
    </>
  );
};
