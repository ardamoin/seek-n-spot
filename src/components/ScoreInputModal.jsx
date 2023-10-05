import ReactDOM from "react-dom";
import { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ScoreInputModal = ({ completedMap, completionTime }) => {
  const [playerName, setPlayerName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const navigate = useNavigate();
  const scoresRef = collection(db, "Scores");

  const nameInputHandler = (event) => {
    setPlayerName(event.target.value);
  };

  const submitScoreHandler = async (event) => {
    event.preventDefault();
    const currentDate = new Date();
    let dateArray = currentDate.toDateString().split(" ").slice(1);

    dateArray[1] = `${+dateArray[1]},`; //Removes possible leading 0 from the day and adds comma after the day. ex. Aug 03 -> Aug 3,

    const formattedCurrentDate = dateArray.join(" ");

    await addDoc(scoresRef, {
      date: formattedCurrentDate,
      map: completedMap,
      player: playerName === "" ? "anonymous" : playerName,
      time: completionTime,
    });

    setNameSubmitted(true);

    setTimeout(() => {
      navigate(`/leaderboard/${completedMap}`);
    }, 2500);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
          <div className="rounded-xl bg-gradient-to-l from-lime-100 via-indigo-500 to-amber-300 p-1">
            {!nameSubmitted && (
              <form
                className="flex flex-col items-center gap-10 rounded-xl bg-secondary p-14"
                onSubmit={submitScoreHandler}
                id="score-form"
              >
                <span className="flex justify-center font-mono text-2xl font-semibold">
                  Congratulations! You completed {completedMap} in{" "}
                  {completionTime} seconds!
                </span>
                <span className="flex justify-center font-mono text-[20px]">
                  Enter your name in the box below and submit your score
                </span>
                <span className="flex justify-center font-mono text-[16px]">
                  (If the name field is omitted, your score will be submitted to
                  the leaderboard anonymously...)
                </span>
                <label className="flex items-center justify-center gap-4 font-mono text-[16px]">
                  <span className="font-bold">Name:</span>
                  <input
                    className="rounded-lg border-2 border-solid border-purple-800 p-1 focus:outline-purple-500"
                    type="text"
                    value={playerName}
                    onChange={nameInputHandler}
                  />
                </label>
                <button
                  className="ml-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center font-mono text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none"
                  type="submit"
                  form="score-form"
                >
                  Submit Score
                </button>
              </form>
            )}
            {nameSubmitted && (
              <div className="flex flex-col items-center gap-10 rounded-xl bg-secondary p-14">
                <span className="flex justify-center font-mono text-2xl font-semibold">
                  Thank you for playing :)
                </span>
                <span className="flex justify-center font-mono text-[20px]">
                  Redirecting to Leaderboard...
                </span>
              </div>
            )}
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ScoreInputModal;
