import "../../App.css";
import Card from "../../assets/Card";
import { useNavigate } from "react-router";
import DisplayCards from "./DisplayCards";
import Remote from "./../../assets/mnconetheme.svg?react";
import MNC from "./../../assets/mnconetheme.svg?react";
import Marketing from "./../../assets/marketingonetheme.svg?react";
import Analytics from "./../../assets/analyticsonetheme.svg?react";
import HR from "./../../assets/hronetheme.svg?react";
import DataScience from "./../../assets/data-scienceonetheme.svg?react";
import Sales from "./../../assets/salesonetheme.svg?react";
import Banking from "./../../assets/financeonetheme.svg?react"
import Fortune500 from "./../../assets/fortune-500onetheme.svg?react";
import Software from "./../../assets/softwareonetheme.svg?react";
import Engineering from "./../../assets/engineeringonetheme.svg?react";

const Content = () => {
  const navigate = useNavigate();
  const signup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/signup");
  };
  type displayProps = {
    name: string;
    logo: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string;
        titleId?: string;
        desc?: string;
        descId?: string;
      }
    >;
  };
const DisplayCards = (props:displayProps) => {
  return (
    <div className="px-3 py-2 mx-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 max-w-1/5 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
      <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
        <div className="mr-2">
            {/* <Hamburger className="size-12" /> */}
            {props.logo}
        </div>
        <div className="mt-1.5">{props.name}</div>
      </div>
    </div>
  );
};
  const cards: displayProps[] = [{name: "Remote",logo: Remote}, {name: "MNC", logo: MNC}, {name:"Marketing",logo:Marketing },
    {name:"Analytics", logo: Analytics}, {name: "HR", logo: HR}, {name: "Data Science", logo: DataScience}, {name: "Sales", logo: Sales},
    {name: "Banking & Finance", logo: Banking},{name: "Fortune 500", logo: Fortune500},{name: "Software & IT", logo: Software},
    {name: "Engineering", logo:Engineering}
  ];
  return (
    <div className="py-18 px-3 ">
      <div>
        <span className="flex justify-center poppins-bold text-4xl">
          Find your dream job now!
        </span>
      </div>
      <div>
        <span className="flex justify-center poppins-light text-2xl">
          More than 5 lac+ jobs for you to find
        </span>
      </div>
      <div>
        <Card
          title="Practice customised mock interview with AI!"
          content="Your result will be visible only to you"
          buttonContent="Sign up now!"
          func={signup}
        />
      </div>
      <div>
        {cards.map((value: displayProps)=>(<div>
            <DisplayCards name={value.name} logo={value.logo}/>
        </div>))}
      </div>
    </div>
  );
};

export default Content;
