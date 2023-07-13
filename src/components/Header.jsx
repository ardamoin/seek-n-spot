const Header = () => {
  return (
    <header className="flex h-20 w-full justify-between bg-accent text-primary">
      <span className="flex items-center p-4 pt-2 font-mono text-3xl">
        Seek-n-Spot
      </span>
      <span className="flex">
        <a className="flex cursor-pointer items-center p-4 pt-2 font-mono hover:opacity-75">
          Maps
        </a>
        <a className="flex cursor-pointer items-center p-4 pt-2 font-mono hover:opacity-75">
          Leaderboard
        </a>
      </span>
    </header>
  );
};

export default Header;
