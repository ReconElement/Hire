import '../../App.css';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import {useParams} from 'react-router';

const NewPosts=()=>{
    const navigate = useNavigate();
    const {route} = useParams();
    // useEffect(()=>{
    //     if(!route){
    //         navigate('/posts/1')
    //     }else{
    //         navigate(`/posts/${route}`)
    //     }
    // },[])
    console.log(route);
    return(
       <Outlet/>
    )
};

export default NewPosts;
