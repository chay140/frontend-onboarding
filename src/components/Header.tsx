import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue shadow-md px-8">
      <Link to="/" className="link text-2xl">
        HOME
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
