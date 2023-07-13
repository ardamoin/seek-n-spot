import { useState } from "react";

const MapCard = ({ image, className, levelName }) => {
  const [textVisibility, setTextVisibility] = useState("invisible");
  const [brightness, setBrightness] = useState("brightness-100");

  const mouseOverHandler = () => {
    setTextVisibility("visible");
    setBrightness("brightness-50");
  };
  const mouseOutHandler = () => {
    setTextVisibility("invisible");
    setBrightness("brightness-100");
  };

  return (
    <div
      className={`${className} relative flex cursor-pointer items-center justify-center transition-transform hover:scale-105`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <span className={`absolute z-10 text-4xl text-white ${textVisibility}`}>
        {levelName}
      </span>
      <img
        src={image}
        className={`relative z-0 h-[35rem] rounded-xl ${brightness}`}
      />
    </div>
  );
};

export default MapCard;
