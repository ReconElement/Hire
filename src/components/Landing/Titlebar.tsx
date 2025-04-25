import '../../App.css';
const Titlebar = ()=>{
    return(
        <div className="flex flex-row bg-darkviolet">
            <div className='text-center space-mono-regular text-lightviolet text-5xl'>
                <span>hire.com</span>
            </div>
            <div className="text-right space-mono-regular text-lightviolet text-base">
                <span>Jobs</span>
            </div>
        </div>
    )
}

export default Titlebar;
