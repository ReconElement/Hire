import '../App.css';
const Card = (props: {title: string, content: string, buttonContent: string, func: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void})=>{
    return(
        <div className="relative flex flex-col my-6 bg-gradient-to-r from-lightviolet to-darkviolet text-gray-400 shadow-sm border border-transparent shadow-emerald-800 rounded-lg w-145">
            <div className="p-4">
                <div className="mb-2 text-slate-200 text-2xl poppins-regular poppins-semibold ">
                    <span className="">
                        {props.title}
                    </span>
                </div>
                <div className="text-slate-200 leading-normal text-xl poppins-light">
                    {props.content}
                </div>
                <button onClick={props.func} type="button" className="rounded-md poppins-light bg-darkviolet py-2 px-4 mt-6 border border-transparent text-center text-base text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-300 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none ">
                    {props.buttonContent}
                </button>
            </div>
        </div>
    )
};

export default Card;