export interface ILocationCard {
  id: number;
  name: string;
  type: string;
  dimesion: string;
}
export const LocationCard = ({ name }: ILocationCard) => {
  <>
    <div className="location_card">
      <h2 className="location_name text-black">{name}</h2>
    </div>
  </>;
};
