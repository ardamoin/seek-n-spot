import { useState } from "react";
import { useStopwatch } from "react-timer-hook";

const Stopwatch = () => {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
    totalSeconds,
  } = useStopwatch({ autoStart: true });

  return (
    <span className="mr-5 flex items-center font-mono text-2xl">
      {hours.toLocaleString("en-US", { minimumIntegerDigits: 2 })}:
      {minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })}:
      {seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
    </span>
  );
};

const GameHeader = ({ characters }) => {
  const [dropdownDisplay, setDropdownDisplay] = useState("hidden");

  const showDropdown = () => {
    setDropdownDisplay("visible");
  };

  const hideDropdown = () => {
    setDropdownDisplay("hidden");
  };

  return (
    <header id="game-header" className="fixed top-0 flex h-20 w-full items-center justify-between bg-accent text-primary">
      <span className="flex items-center p-4 pt-2 font-mono text-3xl">
        Seek-n-Spot
      </span>
      <div
        className="relative mr-20 flex justify-center font-mono"
        onMouseLeave={hideDropdown}
      >
        {/* Button to trigger the dropdown */}
        <button
          className="rounded bg-purple-600 px-4 py-2 text-white"
          onMouseOver={showDropdown}
        >
          Characters
        </button>

        {/* Dropdown menu */}
        <div
          className={`absolute ${dropdownDisplay} mt-10 flex flex-col rounded bg-white py-2 shadow-lg`}
        >
          {Object.keys(characters).map((key) => {
            return (
              <a
                key={Math.random()}
                href="#"
                className="flex w-full min-w-max items-center justify-center gap-5 px-4 py-2 font-semibold text-gray-800 hover:bg-purple-950 hover:text-white"
              >
                {key}
                <img src={characters[key]} className="h-28 w-28" />
              </a>
            );
          })}
        </div>
      </div>
      <Stopwatch />
    </header>
  );
};

export default GameHeader;
