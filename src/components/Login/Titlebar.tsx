import './../../App.css';
import { NavLink } from 'react-router';
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
                    <nav>
                        <NavLink to="/signup">Sign up</NavLink>
                    </nav>
                </div>
                <div className="p-3 hover-underline">
                    Services
                </div>
                
            </div>
            {/* To be made a responsive page on a later iteration */}
            <div className="md:hidden flex flex-row justify-end poppins-regular text-lightviolet">
                <div className="p-3">
                    <svg className='h-2 w-2'>
                        
                    </svg>
                </div>
            </div>
        </div>
    )
};

export default Titlebar;