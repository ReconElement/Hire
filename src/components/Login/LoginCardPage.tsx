import '../../App.css';
import {create} from "zustand";
import { logInAPICall} from '../../API/auth';
import { useNavigate } from 'react-router';


interface Credentials{
    dataSecret: {
        userNameOrEmail?: string,
        password?: string,
    }
    changeUsernameOrEmail: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    changePassword: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const useCredentials = create<Credentials>()((set)=>({
    dataSecret:{
        userNameOrEmail: undefined,
        password: undefined,
    },
    changeUsernameOrEmail: function(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {userNameOrEmail: e.target.value, password: state.dataSecret.password}}));
    },
    changePassword: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({dataSecret: {userNameOrEmail: state.dataSecret.userNameOrEmail, password: e.target.value}}));
    }
}));

const LoginCardPage = ()=>{
    const navigate = useNavigate();
    const {dataSecret, changeUsernameOrEmail, changePassword} = useCredentials();
    async function onSubmit(e: React.MouseEvent<HTMLInputElement, MouseEvent>){
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
          navigate('/pages')
        }else{
          alert("Wrong username/email or password")
        }
      }
      else{
        alert(
          'Incomplete form submission'
        )
      }
    }
    return (
    <div className="max-w-3xs min-w-1/3 shadow shadow-lightblue py-2 px-2 text-lightviolet poppins-regular mx-2 my-2 rounded-md bg-gradient-to-r from-darkviolet to-lightviolet">
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

export default LoginCardPage;
