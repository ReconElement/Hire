import '../../App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
const Test = ()=>{
    const totalPage = 10;
    const [state, setState] = useState<number>(1);
    setInterval(()=>{
        let newNum = state+1;
        if(newNum===10){
            newNum = 1;
        }
        setState(newNum);
        console.log(newNum);
    }, 1000)
    function onChange(e: React.ChangeEvent<unknown>, value: number){
        e.preventDefault();
        e.stopPropagation();
        setState(value);
        console.log(value);
    }
    return(
        <div>
            <div className="flex justify-center">
                <Stack spacing={2}>
                    <Pagination count={totalPage} page={state} color={"primary"} defaultPage={8} onChange={onChange}/>
                </Stack>
            </div>
        </div>
    )
};

export default Test;