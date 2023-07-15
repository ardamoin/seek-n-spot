import MapCard from "./MapCard";
import levelMaps from "./Maps";

const Homepage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="mt-5 font-mono text-2xl font-semibold text-accent">
        Choose a map!
      </h1>

      <div className="flex flex-wrap justify-center gap-20 py-20">
        <MapCard image={levelMaps.Dreamcast} levelName={"Dreamcast"} />
        <MapCard image={levelMaps.Gamecube} levelName={"Gamecube"} />
        <MapCard image={levelMaps.N64} levelName={"N64"} />
        <MapCard image={levelMaps.PS1} levelName={"PS1"} />
        <div className="h-0 basis-full" />
        <MapCard image={levelMaps.PS2} levelName={"PS2"} />
        <MapCard image={levelMaps.PS4} levelName={"PS4"} />
        <MapCard image={levelMaps.Xbox} levelName={"Xbox"} />
        <MapCard image={levelMaps.Xbox360} levelName={"Xbox360"} />
      </div>
    </div>
  );
};

export default Homepage;
