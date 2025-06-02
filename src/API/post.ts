import axios from 'axios';
axios.defaults.withCredentials = true; //sends every request with cookies 
const getPostAPICall = async ()=>{
    let res;
    try{
        res = await axios.get(`${import.meta.env.VITE_DEV_API_URL}/post/`);
    }
    catch(e){
        console.log(e);
    }
    return res;
}

const postPostAPICall = async (title: string, content: string)=>{
    let res;
    try{
        res = await axios.post(`${import.meta.env.VITE_DEV_API_URL}/post/`, {
            title: title,
            content: content,
        });
    }
    catch(e){
        console.log(e);
    }
    return res;
}

export {getPostAPICall, postPostAPICall};
