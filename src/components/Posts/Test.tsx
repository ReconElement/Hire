import '../../App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {create} from 'zustand';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
// const Test = ()=>{
//     const totalPage = 10;
//     const [state, setState] = useState<number>(1);
//     setInterval(()=>{
//         let newNum = state+1;
//         if(newNum===10){
//             newNum = 1;
//         }
//         setState(newNum);
//         console.log(newNum);
//     }, 1000)
//     function onChange(e: React.ChangeEvent<unknown>, value: number){
//         e.preventDefault();
//         e.stopPropagation();
//         setState(value);
//         console.log(value);
//     }
//     return(
//         <div>
//             <div className="flex justify-center">
//                 <Stack spacing={2}>
//                     <Pagination count={totalPage} page={state} color={"primary"} defaultPage={8} onChange={onChange}/>
//                 </Stack>
//             </div>
//         </div>
//     )
// };
//a simple form for username and password 
// type Data={
//     username?: string,
//     password?: string
// }
// interface Content{
//     data: Data,
//     getUsername?: (e: React.ChangeEvent<HTMLInputElement>)=>void,
//     getPassword?: (e: React.ChangeEvent<HTMLInputElement>)=>void,
// }
// const useContents = create<Content>()((set)=>({
//     data: {
//         username: undefined,
//         password: undefined,
//     },
//     getUsername: (e: React.ChangeEvent<HTMLInputElement>)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         set((state)=>({data: {username: e.target.value, password: state.data.password}}));
//     },
//     getPassword: (e: React.ChangeEvent<HTMLInputElement>)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         set((state)=>({data: {username: state.data.username, password: e.target.value}}));
//     }
// }))
// const Test = ()=>{
//     const defaultValues = {
//         username: "John Smith",
//         password: "GuyfromCroatia"
//     }
//     const {data, getUsername, getPassword} = useContents();
//     // function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
//     //     e.preventDefault();
//     //     e.stopPropagation();
//     //     console.log(data?.username);
//     //     console.log(data?.password);
//     // }
//     //using normal react useState things 
//     const [value, setValue] = useState<Data>({
//         username: defaultValues.username,
//         password: defaultValues.password,
//     });
//     const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>)=>{
//         // e.preventDefault();
//         // e.stopPropagation();
//         setValue({...value, username: e.target.value});
//     }
//     const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         setValue({...value, password: e.target.value});
//     }
//     function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
//         e.preventDefault();
//         e.stopPropagation();
//         console.log(value.username);
//         console.log(value.password);
//     }
//     return(
//         <div>
//             <div>
//                 <input title="username" type="text" name="username" id="username" value={defaultValues.username} onChange={onChangeTitle}/>
//             </div>
//             <div>
//                 <input title="password" type="password" name="password" id="password" value={defaultValues.password} onChange={onChangePassword}/>
//             </div>
//             <div>
//                 <button onClick={onSubmit}>Submit</button>
//             </div>
//         </div>
//     )
// }

// type value={
//     username: string,
//     password: string,
// }
// const Test = ()=>{
//     const [value, setValue] = useState<value>({
//         username: "John Smith",
//         password: "GuyFromCroatia"
//     });
//     const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         setValue({...value, username: e.target.value});
//     }
//     const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         setValue({...value, username: e.target.value});
//     }
//     const onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         console.log(`username: ${value.username}`);
//         console.log(`password: ${value.password}`);
//     }
//     return(
//         <div>
//             <div>
//                 <input type="text" name="username" id="username" value={value.username} title="username" onChange={onUsernameChange} />
//             </div>
//             <div>
//                 <input type="password" name="password" id="password" value={value.password} title="password" onChange={onPasswordChange} />
//             </div>
//             <div>
//                 <input type="submit" value="Submit" onClick={onClick}/>
//             </div>
//         </div>
//     )
// }
type Data={
    username?: string, 
    password?: string
}
interface Credentials{
    data: Data,
    getUsername: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    getPassword: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    setUsername: (username: string)=>void,
    setPassword: (password: string)=>void,
}
const useCredentials = create<Credentials>()((set)=>({
    data: {
        username: undefined,
        password: undefined,
    },
    getUsername: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({
            data: {
                username: e.target.value,
                password: state.data.password
            }
        }))
    },
    getPassword: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({
            data: {
                username: state.data.username,
                password: e.target.value,
            }
        }))
    },
    setUsername: (username: string)=>{
        set((state)=>({
            data: {
                username: username,
                password: state.data.password,
            }
        }))
    },
    setPassword: (password: string)=>{
        set((state)=>({
            data:{
                username: state.data.username,
                password: password
            }
        }))
    },
}))
const Test = ()=>{
    const defaultValues={
        username: "John Smith",
        password: "guyfromcroatia"
    }
    const {data, setUsername, setPassword, getPassword, getUsername}=useCredentials();
    useEffect(()=>{
        setUsername(defaultValues.username);
        setPassword(defaultValues.password);
    },[])
    const onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log(`Username: ${data.username}`);
        console.log(`Password: ${data.password}`);
    }
    return(
        <div>
            <div>
                <input type="text" name="username" id="username" title="username" value={data.username} onChange={getUsername} />
            </div>
            <div>
                <input type="password" name="password" id="password" title='password' value={data.password} onChange={getPassword}/>
            </div>
            <div>
                <input type="submit" value="Submit" onClick={onClick}/>
            </div>
        </div>
    )
}
export default Test;