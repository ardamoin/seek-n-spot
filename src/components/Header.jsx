import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="flex h-20 w-full justify-between bg-accent text-primary">
      <span className="flex items-center p-4 pt-2 font-mono text-3xl">
        Seek-n-Spot
      </span>
      <span className="flex">
        <Link
          className="flex cursor-pointer items-center p-4 pt-2 font-mono hover:opacity-75"
          to="/"
        >
          Home
        </Link>
        <Link
          className="flex cursor-pointer items-center p-4 pt-2 font-mono hover:opacity-75"
          to="/leaderboard"
        >
          Leaderboard
        </Link>
      </span>
    </header>
  );
};

export default Header;
