import "../../App.css";
// import { useState } from "react";
import { create } from "zustand";
// type Credentials = {
//   UsernameOrEmail?: string;
//   password?: string;
// };

interface CredentialsV2 {
  dataSecret: {
    UsernameOrEmail?: string;
    password?: string;
  };
  changeUsernameOrEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Submit?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const useCredentials = create<CredentialsV2>()((set)=>({
	dataSecret: {
		UsernameOrEmail: undefined,
		password: undefined
	},
	changeUsernameOrEmail: (e: React.ChangeEvent<HTMLInputElement>)=>{
		e.preventDefault();
		e.stopPropagation();
		set((state)=>({dataSecret: {UsernameOrEmail: e.target.value, password: state.dataSecret.password }}));
	},
	changePassword: (e: React.ChangeEvent<HTMLInputElement>)=>{
		e.preventDefault();
		e.stopPropagation();
		set((state)=>({dataSecret: {UsernameOrEmail: state.dataSecret.UsernameOrEmail, password: e.target.value}}));
	},
	Submit: (e: React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
		e.preventDefault();
		e.stopPropagation();
    
	}
}));

type Show={
  // show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginCard2 = ({ setShow}:Show) => {
  // const [Credentials, setCredentials] = useState<Credentials>({
  //   UsernameOrEmail: undefined,
  //   password: undefined,
  // });

  const { dataSecret, changeUsernameOrEmail, changePassword } = useCredentials();

  // const onUsernameOrEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setCredentials({
  //     ...Credentials,
  //     UsernameOrEmail: e.target.value,
  //   });
  // };
  // const onPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setCredentials({
  //     ...Credentials,
  //     password: e.target.value,
  //   });
  // };

  const onSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    //Used for the bear experiment
    e.preventDefault();
    e.stopPropagation();
    //TODO: Send it through axios to the backend or something
    //Logging part
    if(dataSecret.UsernameOrEmail){
		console.log(dataSecret.UsernameOrEmail);
	}else{
		console.log("Data is not found, username perhaps is null or undefined")
	}
  setShow(false);
  };
  return (
    <div dir="" onMouseEnter={()=>{setShow(true); setTimeout(()=>setShow(false), 30000)}} className="fixed top-12 right-20 shadow shadow-lightblue py-2 px-2 text-lightviolet poppins-regular mx-2 my-2 max-w-full rounded-md bg-gradient-to-r from-lightviolet to-darkviolet">
      <div className="flex justify-center text-3xl p-2">Login</div>
      <div className="flex flex-col">
        <input
          type="text"
          name="username/email"
          onChange={changeUsernameOrEmail}
          id="username/email"
          placeholder="username or email"
          className="p-2 m-2 bg-darkviolet text-lightviolet outline-none rounded-xl shadow-sm shadow-lightblue"
        />
        <input
          type="password"
          name="password"
          onChange={changePassword}
          id="password"
          placeholder="password"
          className="p-2 m-2 bg-darkviolet text-lightviolet outline-none rounded-xl shadow-sm shadow-lightblue"
        />
      </div>
      <div className="flex justify-center">
        {/* <button className='p-2 m-2 bg-darkviolet text-lightviolet rounded-2xl shadow-emerald-400'>Login</button> */}
        <input
          type="submit"
          value="Submit"
          onClick={onSubmit}
          id="submit"
          className="p-2 m-2 bg-darkviolet text-lightviolet rounded-2xl shadow-md shadow-lightblue active:shadow-none"
        />
      </div>
    </div>
  );
};

export default LoginCard2;
