import '../../App.css';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router';

const NewPosts=()=>{
    const navigate = useNavigate();
    // const {route} = useParams();
    const [route, setRoute] = useState<number>(1);
    useEffect(()=>{
        navigate(`/posts/${route}`)
    },[route]);
    const obj = {
        route: route, 
        setRoute: setRoute
    }
    console.log(route);
    return(
       <Outlet context={obj}/>
    )
};

export default NewPosts;
