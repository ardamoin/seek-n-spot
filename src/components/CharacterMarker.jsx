const CharacterMarker = ({ charName, positionLeft, positionTop }) => {
  const markerStyle = {
    left: `${positionLeft}%`,
    top: `${positionTop}%`,
  };
  return (
    <div
      id={charName}
      style={markerStyle}
      className="absolute z-20 rounded-full border-2 border-solid border-red-600"
    ></div>
  );
};

export default CharacterMarker;
