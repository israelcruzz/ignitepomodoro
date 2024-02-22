import { NavLink } from "react-router-dom";
import logo from "../../../public/ignite.svg";
import { Timer, Scroll } from "phosphor-react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <img src={logo} />
      <nav className="flex gap-2 text-[#E1E1E6]">
        <NavLink
          to="/"
          className="w-[3rem] h-[3rem] flex items-center justify-center border-b-2 border-transparent hover:border-b-2 hover:border-b-[#00875F]"
          title="Timer"
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          className="w-[3rem] h-[3rem] flex items-center justify-center border-b-2 border-transparent hover:border-b-2 hover:border-b-[#00875F]"
          title="Historico"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
