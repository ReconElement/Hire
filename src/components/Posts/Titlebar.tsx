import "../../App.css";
import { NavLink } from "react-router";
const TitleBar = () => {
  return (
    <div className="flex flex-row bg-darkviolet justify-stretch fixed top-0 w-full">
      <div className="text-center flex-none space-mono-regular text-lightviolet text-5xl pl-3">
        <NavLink to="/">
            <span>hire.com</span>
          </NavLink>
      </div>
      <div className="text-right flex-none space-mono-regular text-lightviolet text-base">
        <span>Jobs</span>
      </div>
      <div className="hidden md:flex flex-row w-full justify-end poppins-regular text-lightviolet "></div>
      {/* To be made a responsive page on a later iteration */}
       <div className="hidden md:flex flex-row w-full justify-end poppins-regular text-lightviolet ">
        <div className="p-3 pl-2 hover-underline ">
          <nav>
            <NavLink to="/post">Post Job</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
