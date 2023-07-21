import { useParams } from "react-router-dom";
import levelMaps from "./Maps";
import GameHeader from "./GameHeader";
import charImages from "./CharacterImages";
import { useEffect } from "react";

const Arena = () => {
  const { arenaMap } = useParams();
  useEffect(() => {
    const oldHeader = document.getElementById("header");
    if (oldHeader) {
      oldHeader.style.visibility = "hidden";
      //Hides old header when game starts
    }
    return () => {
      oldHeader.style.visibility = "visible";
      //Makes old header visible again when Arena unmounts.
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <GameHeader characters={charImages[arenaMap]} />
      <img
        src={levelMaps[arenaMap]}
        className="h-full w-full bg-cover bg-center bg-no-repeat"
      />
    </div>
  );
};

export default Arena;
