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
    setUserName: (e: React.ChangeEvent<HTMLInputElement>)=>void;
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
        set((state)=>({dataSecret: {firstName: e.target.value, 
            lastName: state.dataSecret.lastName,
            email: state.dataSecret.email,
            userName: state.dataSecret.userName,
            password: state.dataSecret.password,
        }}));
    },
    setLastName: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {lastName: e.target.value, 
            firstName: state.dataSecret.firstName,
            email: state.dataSecret.email,
            userName: state.dataSecret.userName,
            password: state.dataSecret.password,
        }}));
    },
    setEmail: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {email: e.target.value,
            firstName: state.dataSecret.firstName,
            lastName: state.dataSecret.lastName,
            userName: state.dataSecret.userName,
            password: state.dataSecret.password,
        }}));
    },
    setPassword: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {password: e.target.value, 
            firstName: state.dataSecret.firstName,
            lastName: state.dataSecret.lastName,
            email: state.dataSecret.email,
            userName: state.dataSecret.userName,
    }}));
    },
    setUserName: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {userName: e.target.value, 
            firstName: state.dataSecret.firstName,
            lastName: state.dataSecret.lastName,
            email: state.dataSecret.email,
            password: state.dataSecret.password,
        }}));
    }
}));
const SignupCard =()=>{
    const {dataSecret,setFirstName, setLastName, setEmail, setUserName, setPassword} = useCredentials();
    function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        e.stopPropagation();
        //send to the backend via axios or something
        if(dataSecret.email && dataSecret.firstName && dataSecret.lastName && dataSecret.password && dataSecret.userName){
            console.log(`All the values have been accepted for instance ${dataSecret.email}, ${dataSecret.firstName}, ${dataSecret.lastName} etc`)
        }
        else{
            console.log("Some problem might have occurred not all the values have been captured or some field is left unattended");
            console.log(`${dataSecret.firstName} ${dataSecret.lastName} ${dataSecret.email} ${dataSecret.userName}`)
        }
    }
    //previous size: max-w-1/3 min-w-xs
    
    return(
        <div className="px-3 py-3 mt-4 max-w-96 min-w-64">
            <div className="poppins-regular text-lightviolet bg-gradient-to-r  rounded-md from-lightviolet to-darkviolet ">
                <div className='flex justify-center text-3xl py-2 max-w-96 min-w-64'>
                    Signup
                </div>
                <div className="flex flex-row justify-centre p-2 container">
                    <input type="text" onChange={setFirstName} name="firstname" id="firstname" placeholder="First Name" className="p-2 m-2 max-w-48 min-w-32 bg-darkviolet text-lightviolet rounded-xl outline-none shadow-sm shadow-lightblue"/>
                    <input type="text" name="lastname" onChange={setLastName} id="lastname" placeholder="Last Name" className="p-2 m-2 max-w-48 min-w-32 bg-darkviolet text-lightviolet rounded-xl outline-none shadpw-sm shadow-lightblue"/>
                </div>
                <div className="flex flex-row justify-centre p-2 max-w-96 min-w-64">
                    <input type="email" name="email" onChange={setEmail} id="email" placeholder="Email" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl container outline-none shadow-lightblue shadow-sm" />
                </div>
                <div className="flex flex-row justify-centre p-2 max-w-96 min-w-64">
                    <input type="text" name="username" id="username" onChange={setUserName} placeholder="Username" className="p-2 m-2 bg-darkviolet text-lightviolet container  rounded-xl outline-none shadow-lightblue shadow-sm"/>
                </div>
                <div className="flex flex-row justify-centre p-2 max-w-96 min-w-64">
                    <input type="password" name="password" onChange={setPassword} id="password" placeholder="Password" className='p-2 m-2 bg-darkviolet text-lightviolet container rounded-xl outline-none shadow-lightblue shadow-sm'/>
                </div>
                <div className="flex flex-row justify-center p-2 text-lightviolet">
                    <button type="submit" onClick={onSubmit} className="p-2 shadow-md shadow-lightblue rounded-xl hover:bg-darkblue active:shadow-none">Submit</button>
                </div>
            </div>
        </div>
    )
};

export default SignupCard;