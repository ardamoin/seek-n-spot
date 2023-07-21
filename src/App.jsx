import Arena from "./components/Arena";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex h-auto flex-wrap bg-secondary">
      <Header/>
      <Routes>
        <Route element={<Homepage />} path="/homepage" />
        <Route element={<Leaderboard />} path="/leaderboard" />
        <Route element={<Arena />} path="/arena/:arenaMap" />
      </Routes>
    </div>
  );
}

export default App;
