import '../../App.css';
import Hamburger from '../../assets/hamburger.svg?react';
const DisplayCards = ()=>{
    return(
        <div className="px-3 py-2 border border-sm border-emerald-400 shadow-sm rounded-xl shadow-emerald-400 bg-amber-400 max-w-1/5 bg-gradient-to-r from-lightviolet to-darkviolet">
            <div className="poppins-semibold px-2 text-slate-200 flex flex-row">
                <p>Remote</p>
                <div className=''>
                    <Hamburger className='size-2 '/>
                </div>
            </div>
        </div>
    )
}

export default DisplayCards;