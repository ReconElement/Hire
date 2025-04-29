import '../../App.css';
const Titlebar = ()=>{
    return(
        <div className="flex flex-row bg-darkviolet justify-stretch">
            <div className='text-center flex-none space-mono-regular text-lightviolet text-5xl pl-3'>
                <span>hire.com</span>
            </div>
            <div className="text-right flex-none space-mono-regular text-lightviolet text-base">
                <span>Jobs</span>
            </div>
            <div className="hidden md:flex flex-row w-full justify-end poppins-regular text-lightviolet ">
                <div className="p-3 hover-underline">
                    Companies 
                </div>
                <div className="p-3 hover-underline">
                    Jobs
                </div>
                <div className="p-3 hover-underline">
                    Services
                </div>
            </div>
        </div>
    )
}

export default Titlebar;
