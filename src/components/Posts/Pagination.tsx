import '../../App.css';
import Backarrow from '../../assets/backarrow.svg?react';
import Forwardarrow from '../../assets/forwardarrow.svg?react';
const Pagination = ({state, setState, totalPage}:{state: number, setState: React.Dispatch<React.SetStateAction<number>>, totalPage: number})=>{
    const increasePage =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        if(state===totalPage){
            //@ts-expect-error It is neccessary cos the disabled option was not showing
            document.getElementById("forward").disabled = true;
        }
        else{
            setState(state+1);
            console.log(state);
        }
    }
    const decreasePage =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        if(state===1){
            //@ts-expect-error It has become neccessary cos the disabled option was not showing
            document.getElementById("backward").disabled = true;
        }
        else{
            setState(state-1);
            console.log(state);
        }
    }
    if(state!==1){
        //@ts-expect-error It has become neccessary cos the disabled option was not showing
        document.getElementById("backward").disabled = false;
    }
    if(state!==totalPage){
        //@ts-expect-error It has become neccessary cos the disabled option was not showing
        document.getElementById("forward").disabled = false;
    }
    return(
        <div className="flex flex-row">
            <p className="p-2 text-lightblue">1</p>
            <button className="p-2 mr-2 shadow-md shadow-blue-400 rounded-xl active:shadow-none focus:shadow-blue-400 disabled:shadow-none" onClick={decreasePage} id="backward" title="backward"><Backarrow/></button>
            <input className="w-8 text-lightblue outline-none text-center" value={state} type="text" name="page" id="page" title="page" />
            <button className="p-2 ml-2 shadow-md shadow-blue-400 rounded-xl active:shadow-none focus:shadow-blue-400 disabled:shadow-none" onClick={increasePage} id="forward" title="forward"><Forwardarrow/></button>
            <p className='p-2 text-lightblue'>{totalPage}</p>
        </div>
    )
}

export default Pagination;
