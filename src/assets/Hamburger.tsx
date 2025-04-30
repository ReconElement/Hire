/// <reference types="vite-plugin-svgr/client" />
import '../App.css';
import AHamburger from "./hamburger.svg?react";
const Hamburger = ()=>{
    return(
        <svg>
            <AHamburger/>
        </svg>
    )
}

export default Hamburger;
