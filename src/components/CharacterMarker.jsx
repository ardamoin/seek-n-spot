const CharacterMarker = ({ charName, positionLeft, positionTop }) => {
  const markerStyle = {
    left: `${positionLeft}%`,
    top: `${positionTop}%`,
  };
  return (
    <div
      id={charName}
      style={markerStyle}
      className="absolute z-20 rounded-full border-2 border-solid border-transparent"
    ></div>
  );
};

export default CharacterMarker;
