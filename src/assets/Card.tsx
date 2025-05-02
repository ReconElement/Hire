import '../App.css';
const Card = ()=>{
    return(
        <div className="relative flex flex-col my-6 bg-gradient-to-r from-lightviolet to-darkviolet text-gray-400 shadow-sm border border-slate-200 border-transparent rounded-lg w-145">
            <div className="p-4">
                <div className="mb-2 text-slate-200 text-2xl poppins-regular poppins-semibold ">
                    <span className="">
                        Practice customised mock interview with AI!
                    </span>
                </div>
                <div className="text-slate-200 leading-normal text-xl poppins-light">
                    Your results will be visible only to you
                </div>
                <button type="button" className="rounded-md poppins-light bg-darkviolet py-2 px-4 mt-6 border border-transparent text-center text-base text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-300">
                    Register now!
                </button>
            </div>
        </div>
    )
};

export default Card;