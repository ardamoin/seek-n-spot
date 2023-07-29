import { useParams } from "react-router-dom";
import levelMaps from "./Maps";
import GameHeader from "./GameHeader";
import charImages from "./CharacterImages";
import { useEffect, useRef } from "react";
import CharacterMarker from "./CharacterMarker";
import charPositions from "./CharacterPositions";

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

  const imgRef = useRef();

  function measureDistance(element, cursorX, cursorY) {
    // Measures distance from element to cursor
    // Get the position and size of the element
    const rect = element.getBoundingClientRect();
    const elementX = rect.left;
    const elementY = rect.top;
    const elementWidth = rect.width;
    const elementHeight = rect.height;

    // Calculate the center point of the element
    const centerX = elementX + elementWidth / 2;
    const centerY = elementY + elementHeight / 2;

    // Calculate the distance between the element's center and the cursor
    const distanceX = Math.abs(centerX - cursorX);
    const distanceY = Math.abs(centerY - cursorY);

    // Calculate the distance between the element's center and the cursor as a percentage of image height and width
    const realDistanceX = distanceX / imgRef.current.width;
    const realDistanceY = distanceY / imgRef.current.height;

    // Calculate the overall distance using the Pythagorean theorem
    const distance = Math.sqrt(realDistanceX ** 2 + realDistanceY ** 2);

    return distance;
  }

  const mouseClickHandler = (event) => {
    let rect = event.target.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY;
    let targetElement = document.getElementById("Nathan Drake");

    console.log(measureDistance(targetElement, x, y));

    if (measureDistance(targetElement, x, y) < 0.02) {
      alert("Congrats you found Nathan!!!");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <GameHeader characters={charImages[arenaMap]} />
      <img
        src={levelMaps[arenaMap]}
        className="h-full w-full bg-cover bg-center bg-no-repeat"
        onClick={mouseClickHandler}
        ref={imgRef}
      />
      {Object.keys(charImages[arenaMap]).map((character) => (
        <CharacterMarker
          key={Math.random()}
          charName={character}
          positionLeft={charPositions[arenaMap][character].left}
          positionTop={charPositions[arenaMap][character].top}
        />
      ))}
    </div>
  );
};

export default Arena;
