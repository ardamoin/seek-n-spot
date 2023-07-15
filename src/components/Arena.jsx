import { useParams } from "react-router-dom";
import levelMaps from "./Maps";

const Arena = () => {
  const { arenaMap } = useParams();
  return (
    <div className="min-h-screen w-full">
      <img
        src={levelMaps[arenaMap]}
        className="h-full w-full bg-cover bg-center bg-no-repeat"
      />
    </div>
  );
};

export default Arena;
