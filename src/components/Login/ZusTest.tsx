import "../../App.css";
import {create} from 'zustand';
type Store = {
    count: number,
    inc: ()=>void
}

const useStore = create<Store>()((set)=>({
    count: 1,
    inc: ()=>set((state)=>({
        count: state.count +1
    })),
}))
const ZusTest = ()=>{

    const {count, inc} = useStore();
    return(
        <div>
            <button onClick={inc}>Increase</button>
            <h1>{count}</h1>
        </div>
    )
};

export default ZusTest;