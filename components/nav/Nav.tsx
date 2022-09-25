import Logo from "../logo/Logo";
import { navItems } from "./nav.config";
import NavItem from "./components/NavItem";
export default function Nav() {
  return (
    <nav className="flex justify-center items-center w-full h-12 bg-black bg-opacity-60">
      <div className=" z-20 h-full flex flex-col max-w-7xl w-full justify-between items-center mx-auto p-2 overflow-hidden">
        <div className="z-20 flex justify-between w-full items-center">
          <Logo />
          <div className="font-semibold text-sm space-x-2 flex sm:text-lg sm:space-x-6 items-center">
            {navItems.map((el) => {
              return <NavItem key={el.title} title={el.title} link={el.link} />;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
