import '../../App.css';
import {create} from 'zustand';

// values extracted {first name, last name, email, username, password}
interface Credentials{
    dataSecret: {
        firstName?: string,
        lastName?: string,
        email?: string,
        userName?: string,
        password?: string
    }
    setFirstName: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    setLastName: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    setEmail: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    setPassword: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const useCredentials = create<Credentials>()((set)=>({
    dataSecret: {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        userName: undefined,
        password: undefined,
    },
    setFirstName: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {firstName: e.target.value, ...state.dataSecret}}));
    },
    setLastName: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {lastName: e.target.value, ...state.dataSecret}}));
    },
    setEmail: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {email: e.target.value, ...state.dataSecret}}));
    },
    setPassword: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {password: e.target.value, ...state.dataSecret}}));
    }
}));
const SignupCard =()=>{
    const {setFirstName, setLastName, setEmail, setPassword} = useCredentials();
    return(
        <div className="px-3 py-3 mt-4">
            <div className="poppins-regular text-lightviolet bg-gradient-to-r max-w-1/3 min-w-xs rounded-md from-lightviolet to-darkviolet ">
                <div className='flex justify-center text-3xl py-2'>
                    Signup
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="text" onChange={setFirstName} name="firstname" id="firstname" placeholder="First Name" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none shadow-sm"/>
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none"/>
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="email" onChange={setLastName} name="email" id="email" placeholder="Email" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl min-w-md outline-none shadow-lightblue shadow-sm" />
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="text" onChange={setEmail} name="username" id="username" placeholder="Username" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl min-w-md outline-none shadow-lightblue shadow-sm"/>
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="password" onChange={setPassword} name="password" id="password" placeholder="Password" className='p-2 m-2 bg-darkviolet text-lightviolet rounded-xl min-w-md outline-none shadow-lightblue shadow-sm'/>
                </div>
                <div className="flex flex-row justify-center p-2 text-lightviolet">
                    <button type="submit" className="p-2 shadow-md shadow-lightblue rounded-xl hover:bg-darkblue active:shadow-none">Submit</button>
                </div>
            </div>
        </div>
    )
};

export default SignupCard;