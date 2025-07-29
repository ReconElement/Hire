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

const updatePostAPICall = async (id: string, title: string, content: string)=>{
    let res;
    try{
        res = await axios.post(`${import.meta.env.VITE_DEV_API_URL}/post/update/${id}`, {
            title: title,
            content: content
        })
    }
    catch(e){
        console.log(e);
    }
    return res;
}

const deletePostAPICall = async (id: string)=>{
    let res;
    try{
        res = await axios.delete(`${import.meta.env.VITE_DEV_API_URL}/post/delete/${id}`);
    }
    catch(e){
        console.log(e);
    }
    return res;
}

export {getPostAPICall, postPostAPICall, updatePostAPICall, deletePostAPICall};
