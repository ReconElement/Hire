import "../../App.css";
// import Hamburger from "../../assets/hamburger.svg?react";
// import Remote from "../../assets/remoteonetheme.svg?react";
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
const DisplayCards = () => {
  // const logo = props.logo as React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Remote} alt="Remote" />
            </div>
            <div className="mt-1.5">Remote</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={MNC} alt="MNC" />
            </div>
            <div className="mt-1.5">MNC</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Marketing} alt="Marketing" />
            </div>
            <div className="mt-1.5">Marketing</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Analytics} alt="Analytics" />
            </div>
            <div className="mt-1.5">Analytics</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={HR} alt="HR" />
            </div>
            <div className="mt-1.5">HR</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={DataScience} alt="Data Science" />
            </div>
            <div className="mt-1.5">Data Science</div>
          </div>
        </div>
        </div>
        <div className="flex flex-row justify-center">
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Sales} alt="Sales" />
            </div>
            <div className="mt-1.5">Sales</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Banking} alt="Banking and Finance" />
            </div>
            <div className="mt-1.5">Banking & Finance</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Fortune500} alt="Fortune 500" />
            </div>
            <div className="mt-1.5">Fortune 500</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Software} alt="Software and IT" />
            </div>
            <div className="mt-1.5">Software & IT</div>
          </div>
        </div>
        <div className="px-3 py-2 mx-2 mb-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 min-w-1/7 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
          <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
            <div className="mr-2">
              <img src={Engineering} alt="Engineering" />
            </div>
            <div className="mt-1.5">Engineering</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
