import { useState } from "react";
import playerEntries from "./DummyData";
import levelMaps from "./Maps";

const Leaderboard = () => {
  const [userScoresFromMap, setUserScoresFromMap] = useState(
    playerEntries.filter((p) => p.map === "Dreamcast")
  );
  const [imageSrc, setImageSrc] = useState(levelMaps.Dreamcast);

  const changeMap = (event) => {
    let newMap = playerEntries.filter((p) => p.map === event.target.value);
    setUserScoresFromMap(newMap);
    setImageSrc(levelMaps[event.target.value]);
  };

  return (
    <div className="mb-20 ml-40 flex min-h-[100vh] flex-col flex-wrap">
      <h1 className="mb-5 mt-5 font-mono text-2xl font-semibold text-accent">
        Leaderboard
      </h1>
      <div className="flex">
        <table>
          <thead>
            <tr>
              <th className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                Player
              </th>
              <th className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                Time
              </th>
              <th className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                Date
              </th>
              <th className="px-5 py-2">
                <label htmlFor="maps" className="text-accent">
                  Map:
                </label>
                <select
                  name="maps"
                  onChange={changeMap}
                  className="ml-2 cursor-pointer rounded-md p-2 font-normal"
                >
                  <option value="Dreamcast">Dreamcast</option>
                  <option value="Gamecube">Gamecube</option>
                  <option value="N64">N64</option>
                  <option value="PS1">PS1</option>
                  <option value="PS2">PS2</option>
                  <option value="PS4">PS4</option>
                  <option value="Xbox">Xbox</option>
                  <option value="Xbox360">Xbox360</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {userScoresFromMap.map((entry) => {
              return (
                <tr key={Math.random()}>
                  <td className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                    {entry.playerName}
                  </td>
                  <td className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                    {entry.completionTime}
                  </td>
                  <td className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                    {entry.completionDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <img src={imageSrc} className="ml-20 h-[400px] rounded-lg" />
      </div>
    </div>
  );
};

export default Leaderboard;
