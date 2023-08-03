import { useParams } from "react-router-dom";
import levelMaps from "./Maps";
import GameHeader from "./GameHeader";
import charImages from "./CharacterImages";
import { useEffect, useState } from "react";
import CharacterMarker from "./CharacterMarker";
import charPositions from "./CharacterPositions";
import ContextMenu from "./ContextMenu";
import ScoreInputModal from "./ScoreInputModal";

const initialContextMenu = {
  show: false,
  x: 0,
  y: 0,
};

const Arena = () => {
  const [contextMenu, setContextMenu] = useState(initialContextMenu);
  const { arenaMap } = useParams();
  const [characters, setCharacters] = useState(charImages[arenaMap]);
  const [numberOfCharacters, setNumberOfCharacters] = useState(
    Object.keys(charImages[arenaMap]).length
  );

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

  const timerRef = document.getElementById("timer");

  const openContextMenu = (e) => {
    let rect = e.target.getBoundingClientRect();
    let pageX = e.clientX - rect.left;
    let pageY = e.clientY - rect.top;
    setContextMenu({ show: true, x: pageX, y: pageY });
  };

  const closeContextMenu = () => {
    setContextMenu(initialContextMenu);
  };

  const removeCharacter = (characterName) => {
    setCharacters((prev) => {
      delete prev[characterName];
      return prev;
    });
    setNumberOfCharacters((prev) => prev - 1);
  };

  return (
    <div className="relative min-h-screen w-full">
      <GameHeader characters={characters} numOfChars={numberOfCharacters} />
      <img
        src={levelMaps[arenaMap]}
        className="h-full w-full bg-cover bg-center bg-no-repeat"
        onClick={(e) => {
          if (contextMenu.show) {
            closeContextMenu();
          } else {
            openContextMenu(e);
          }
        }}
        id="arena-img"
      />
      {contextMenu.show && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          names={Object.keys(characters)}
          close={closeContextMenu}
          removeCharacter={removeCharacter}
        />
      )}
      {Object.keys(characters).map((character) => (
        <CharacterMarker
          key={Math.random()}
          charName={character}
          positionLeft={charPositions[arenaMap][character].left}
          positionTop={charPositions[arenaMap][character].top}
        />
      ))}
      {numberOfCharacters < 1 && (
        <ScoreInputModal
          completedMap={arenaMap}
          completionTime={timerRef.textContent}
        />
      )}
    </div>
  );
};

export default Arena;
