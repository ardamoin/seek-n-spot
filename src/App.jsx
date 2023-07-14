import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="flex flex-wrap h-auto bg-secondary">
      <Header />
      {/* <Homepage /> */}
      <Leaderboard />
    </div>
  );
}

export default App;
