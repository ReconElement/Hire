import "../../App.css";
import Card from "../../assets/Card";
import { useNavigate } from "react-router";
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
    logo: string,
}
const Content = () => {
  const navigate = useNavigate();
  const signup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/signup");
  };

  

  const cards: displayProps[] = [
    { name: "Remote", logo: Remote },
    { name: "MNC", logo: MNC },
    { name: "Marketing", logo: Marketing },
    { name: "Analytics", logo: Analytics },
    { name: "HR", logo: HR },
    { name: "Data Science", logo: DataScience },
    { name: "Sales", logo: Sales },
    { name: "Banking & Finance", logo: Banking },
    { name: "Fortune 500", logo: Fortune500 },
    { name: "Software & IT", logo: Software },
    { name: "Engineering", logo: Engineering },
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
        <div className="flex flex-col">
          {cards.map((ele)=>(<div><DisplayCards name={ele.name} logo={ele.logo}/></div>))}
        </div>
      </div>
    </div>)
};

export default Content;