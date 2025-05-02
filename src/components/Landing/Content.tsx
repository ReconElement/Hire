import '../../App.css';
import Card from '../../assets/Card';
const Content = ()=>{
    return (
        <div className="py-18 px-3 ">
            <div>
                <span className="flex justify-center poppins-bold text-4xl">Find your dream job now!</span>
            </div>
            <div>
                <span className="flex justify-center poppins-light text-2xl">More than 5 lac+ jobs for you to find</span>
            </div>
            <div>
                {/* refer to https://www.material-tailwind.com/docs/html/card#blog-card for these tailwind styles */}
                {/* <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                    <div className="p-4">
                        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                            Practice customised mock interview with AI!
                        </h5>
                        <p className="text-slate-600 leading-normal font-light">
                            Don't worry your result will be visible only to you
                        </p>
                        <button type="button" className="rounded-md bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700  hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Sign up now! 
                        </button>
                    </div>
                </div> */}
                <Card/>
            </div>
        </div>
    )
}

export default Content;