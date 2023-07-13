import Header from "./Header";
import MapCard from "./MapCard";
import levelMaps from "./Maps";

const Homepage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Header />
      
      <h1 className="font-mono text-accent font-semibold text-2xl mt-5">Choose a map!</h1>

      <div className="flex flex-wrap gap-20 justify-center py-20">
        <MapCard image={levelMaps.dreamcast} levelName={'Dreamcast'} />
        <MapCard image={levelMaps.gamecube} levelName={'Gamecube'}/>
        <MapCard image={levelMaps.n64} levelName={'N64'}/>
        <MapCard image={levelMaps.ps1} levelName={'PS1'}/>
        <div className="h-0 basis-full" />
        <MapCard image={levelMaps.ps2} levelName={'PS2'}/>
        <MapCard image={levelMaps.ps4} levelName={'PS4'}/>
        <MapCard image={levelMaps.xbox} levelName={'Xbox'}/>
        <MapCard image={levelMaps.xbox360} levelName={'Xbox 360'}/>
      </div>
    </div>
  );
};

export default Homepage;
