import PortalGif from "../assets/loading.gif";
import "../styles/Loading.scss";
interface ILoading {
  isLoading: boolean;
}

export const Loading = ({ isLoading }: ILoading) => {
  return isLoading ? (
    <main className="loading bg-gray-800 h-screen">
      <img src={PortalGif} alt="loading..." />
    </main>
  ) : null;
};
