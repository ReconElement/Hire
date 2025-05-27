import axios from 'axios';
const getResponse = async ()=>{
    let res;
    try{
        res = await axios.get(`${import.meta.env.VITE_DEV_API_URL}/test`)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log(res)
    }
}

const signUpAPICall = async (fullName: string, email: string, userName: string, password: string)=>{
    let res;
    try{
        res = await axios.post(`${import.meta.env.VITE_DEV_API_URL}/routes/signup`,{
            fullName: fullName, email: email, userName: userName, password: password
        });
    }
    catch(e){
        console.log(e);
    }
    return res;
}

const logInAPICall = async (userNameOrEmail: string, password: string)=>{
    let res;
    let jwtToken: string;
    try{
        res = await axios.post(`${import.meta.env.VITE_DEV_API_URL}/routes/login`,{
            userNameOrEmail: userNameOrEmail,
            password: password
        });
        jwtToken = res.data as string;
        sessionStorage.setItem('jwtToken',jwtToken);
    }
    catch(e){
        console.log(e);
    }
    return res;
    
}

export {getResponse, signUpAPICall, logInAPICall};
