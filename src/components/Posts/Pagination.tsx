import '../../App.css';
import Backarrow from '../../assets/backarrow.svg?react';
import Forwardarrow from '../../assets/forwardarrow.svg?react';
const Pagination = ({state, setState, totalPage}:{state: number, setState: React.Dispatch<React.SetStateAction<number>>, totalPage: number})=>{
    
    return(
        <div>
            <button className="p-2 mr-2 shadow-md shadow-blue-400 rounded-xl" title="backward"><Backarrow/></button>
            <button className="p-2 ml-2 shadow-md shadow-blue-400 rounded-xl" title="forward"><Forwardarrow/></button>
        </div>
    )
}

export default Pagination;
