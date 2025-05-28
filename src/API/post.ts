import axios from 'axios';
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
    const jwtToken = sessionStorage.getItem("jwtToken");
    console.log(jwtToken);
    try{
        res = await axios.post(`${import.meta.env.VITE_DEV_API_URL}/post/`, {
            Headers: {
                authorization: `${jwtToken}`
            },
            title: title,
            content: content
        });
    }
    catch(e){
        console.log(e);
    }
    return res;
}

export {getPostAPICall, postPostAPICall};
