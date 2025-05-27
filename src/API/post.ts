import axios from 'axios';
const getPostAPICall = async ()=>{
    let res;
    try{
        res = await axios.get(`${import.meta.env.VITE_DEV_API_URL}/post/`)
    }
    catch(e){
        console.log(e);
    }
    return res;
}

export {getPostAPICall};
