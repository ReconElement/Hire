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

export default getResponse;