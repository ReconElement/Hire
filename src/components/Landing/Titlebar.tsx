import '../../App.css';
// import Hamburger from '../../assets/Hamburger';
import Hamburger from "../../assets/hamburger.svg?react";
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router';
import LoginCard2 from '../Login/LoginCard2';
import { useState } from 'react';

type Show ={
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const ShowLogin = ({show, setShow}:Show)=>{
    return createPortal(
            <div>
                <LoginCard2 show={show} setShow={setShow}/>
            </div>,
            document.body
        );
}
const Titlebar = ()=>{
    const [show, setShow] = useState<boolean>(false);
    return(
        <div className="flex flex-row bg-darkviolet justify-stretch">
            <div className='text-center flex-none space-mono-regular text-lightviolet text-5xl pl-3'>
                <span>hire.com</span>
            </div>
            <div className="text-right flex-none space-mono-regular text-lightviolet text-base">
                <span>Jobs</span>
            </div>
            <div className="hidden md:flex flex-row w-full justify-end poppins-regular text-lightviolet ">
                <div className="p-3 hover-underline" onMouseEnter={()=>{setShow(true); setTimeout(()=>setShow(false), 30000)}} /*onMouseLeave={()=>setTimeout(()=>setShow(false), 5000)}*/>
                    <nav>
                        <NavLink to="/login">Login</NavLink>
                    </nav>
                    {/* <button onClick={()=>{setShow(!show)}}>Login</button> */}
                    {show && (<div className=''><ShowLogin show={show} setShow={setShow}/></div>)}
                </div>
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
                        <Hamburger/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Titlebar;
