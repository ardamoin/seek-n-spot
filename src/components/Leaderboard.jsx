import { useEffect, useState } from "react";
import levelMaps from "./Maps";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { useParams } from "react-router-dom";

const Leaderboard = () => {
  const [userScoresFromMap, setUserScoresFromMap] = useState([]);
  const { arenaMap } = useParams();
  const [imageSrc, setImageSrc] = useState(levelMaps[arenaMap]);

  const scoresRef = collection(db, "Scores");

  const convertTimeToNumber = (timeString) => {
    // Takes completion time as a string (in the format 00:00:00) and converts it to an integer.
    // This is a helper function to help sort player score data in ascending order of completion time.
    const timeStringWithoutColon = timeString.replace(/:/g, '');
    return +timeStringWithoutColon;
  }

  const updateScoreState = async (map) => {
    const q = query(scoresRef, where("map", "==", map));
      const querySnapshot = await getDocs(q);
      let snapshotData = [];
      querySnapshot.forEach((doc) => snapshotData.push(doc.data()));
      snapshotData.sort((a, b) => convertTimeToNumber(a.time) - convertTimeToNumber(b.time));
      setUserScoresFromMap(snapshotData);
  }

  useEffect(() => {
    // Retrieves player scores for Dreamcast as the initial user scores
    if (userScoresFromMap.length === 0) {
      updateScoreState(arenaMap);
    }
  }, []);

  const changeMap = (event) => {
    updateScoreState(event.target.value)
    setImageSrc(levelMaps[event.target.value]);

    const currentURL = window.location.href;
    const updatedURL = currentURL.split("/").slice(0, -1).concat(event.target.value).join("/");

    // Updates URL to reflect the arena whose scores we are checking
    window.history.replaceState(null, '', updatedURL)
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
                  defaultValue={arenaMap}
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
                    {entry.player}
                  </td>
                  <td className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                    {entry.time}
                  </td>
                  <td className="max-w-sm border-2 border-solid border-gray-300 px-10 py-2 text-accent">
                    {entry.date}
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
