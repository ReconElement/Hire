import '../../App.css';
import {Github} from 'lucide-react';
import { getOauthAPICall } from '../../API/oauth';
const OauthSignUp = ()=>{
    async function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        let res;
        e.preventDefault();
        e.stopPropagation();
        try{
            res = await getOauthAPICall();
        }catch(e){
            console.log(e)
        }
        console.log(res);
        
    }
    async function logOut(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        let res;
        e.preventDefault();
        e.stopPropagation();
        try{
            res = await getOauthAPICall();
        }catch(e){
            console.log(e);
        }
        console.log(res);
    }
    return(
        <div className="">
            <div className='m-2 p-2' onClick={onClick}>
                <Github/>
            </div>
            <div className="m-2 p-2" onClick={logOut}>
                LogOut
            </div>
        </div>
    )
};

export default OauthSignUp;
