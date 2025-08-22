import axios from 'axios';
const getOauthAPICall = async ()=>{
    let res;
    try{
        res = await axios.get(`${import.meta.env.VITE_DEV_API_URL}/oauth/login`);
    }catch(e){
        console.log(e);
    }
    return res;
}
const logOutOauthAPICall = async ()=>{
    let res;
    try{
        res = await axios.get(`${import.meta.env.VITE_DEV_API_URL}/oauth/logout`);
    }
    catch(e){
        console.log(e);
    }
    return res;
}
const getOauthAPICallRedirection = async ()=>{
    // const xhr = new XMLHttpRequest();
    // xhr.open(
    //     'GET',
    //     `${import.meta.env.VITE_DEV_API_URL}/oauth/login`,
    //     true
    // );
    // xhr.onload = function(){
    //     console.log(xhr.responseURL);
    // };
    // xhr.send(null);
    const xhr = new XMLHttpRequest();
    try {
        xhr.open('GET',`${import.meta.env.VITE_DEV_API_URL}/oauth/login`, true);
        xhr.onload = function (){
            console.log(xhr.responseURL);
        };
    }catch(e){
        console.log(e);
    }
    return xhr.send(null);
}
export {getOauthAPICall, getOauthAPICallRedirection, logOutOauthAPICall};