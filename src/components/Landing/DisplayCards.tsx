import "../../App.css";
// import Hamburger from "../../assets/hamburger.svg?react";
// import Remote from "../../assets/remoteonetheme.svg?react";
import DisplayCards from "./DisplayCards";
import Remote from "./../../assets/remoteonetheme.svg";
import MNC from "./../../assets/mnconetheme.svg";
import Marketing from "./../../assets/marketingonetheme.svg";
import Analytics from "./../../assets/analyticsonetheme.svg";
import HR from "./../../assets/hronetheme.svg";
import DataScience from "./../../assets/data-scienceonetheme.svg";
import Sales from "./../../assets/salesonetheme.svg";
import Banking from "./../../assets/financeonetheme.svg";
import Fortune500 from "./../../assets/fortune-500onetheme.svg";
import Software from "./../../assets/softwareonetheme.svg";
import Engineering from "./../../assets/engineeringonetheme.svg";
type displayProps = {
    name: string,
    logo: string
}
const DisplayCards = (props:displayProps) => {
  // const logo = props.logo as React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  return (
    <div className="px-3 py-2 mx-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 max-w-1/5 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
      <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
        <div className="mr-2">
            {/* <Hamburger className="size-12" /> */}
            {/* <img src={Remote} alt="remote" className="fill-amber-200"/> */}
            
        </div>
        <div className="mt-1.5">{props.name}</div>
      </div>
    </div>
  );
};

export default DisplayCards;
