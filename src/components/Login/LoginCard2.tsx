import "../../App.css";
import { logInAPICall } from "../../API/auth";
// import { useState } from "react";
import { create } from "zustand";
import {useNavigate} from 'react-router'
// type Credentials = {
//   userNameOrEmail?: string;
//   password?: string;
// };


interface CredentialsV2 {
  dataSecret: {
    userNameOrEmail?: string;
    password?: string;
  };
  changeuserNameOrEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Submit?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const useCredentials = create<CredentialsV2>()((set)=>({
	dataSecret: {
		userNameOrEmail: undefined,
		password: undefined
	},
	changeuserNameOrEmail: (e: React.ChangeEvent<HTMLInputElement>)=>{
		e.preventDefault();
		e.stopPropagation();
		set((state)=>({dataSecret: {userNameOrEmail: e.target.value, password: state.dataSecret.password }}));
	},
	changePassword: (e: React.ChangeEvent<HTMLInputElement>)=>{
		e.preventDefault();
		e.stopPropagation();
		set((state)=>({dataSecret: {userNameOrEmail: state.dataSecret.userNameOrEmail, password: e.target.value}}));
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
  //   userNameOrEmail: undefined,
  //   password: undefined,
  // });
  const navigate = useNavigate();
  const { dataSecret, changeuserNameOrEmail, changePassword } = useCredentials();

  // const onuserNameOrEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setCredentials({
  //     ...Credentials,
  //     userNameOrEmail: e.target.value,
  //   });
  // };
  // const onPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setCredentials({
  //     ...Credentials,
  //     password: e.target.value,
  //   });
  // };

  const onSubmit = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
      e.stopPropagation();
      let res;
      if(dataSecret.userNameOrEmail && dataSecret.password){
        try{
          res = await logInAPICall(dataSecret.userNameOrEmail, dataSecret.password)
        }
        catch(e){
          console.log(e);
        }
        if(res?.status===200){
          navigate('/posts');
        }else{
          alert("Wrong email/username or password");
        }
      }
      else{
        alert(
          'Incomplete form submission'
        )
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
          onChange={changeuserNameOrEmail}
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
