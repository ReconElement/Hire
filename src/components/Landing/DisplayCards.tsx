import "../../App.css";
// import Hamburger from "../../assets/hamburger.svg?react";
// import Remote from "../../assets/remoteonetheme.svg?react";
type displayProps = {
    name: string,
    logo: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
}>
}
const DisplayCards = (props:displayProps) => {
  const logo: React.ReactElement = props.logo;
  return (
    <div className="px-3 py-2 mx-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 max-w-1/5 bg-gradient-to-r hover:shadow-2xl hover:shadow-lightviolet from-lightviolet to-darkviolet">
      <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
        <div className="mr-2">
            {/* <Hamburger className="size-12" /> */}
            {logo}
        </div>
        <div className="mt-1.5">{props.name}</div>
      </div>
    </div>
  );
};

export default DisplayCards;
