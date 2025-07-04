import '../../App.css';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

const NewPosts=()=>{
    const navigate = useNavigate();
    // const {route} = useParams();
    const [route, setRoute] = useState<number>(1);
    useEffect(()=>{
        navigate(`/pages/${route}`);
    },[route]);
    const obj = {
        route: route, 
        setRoute: setRoute
    }
    console.log(`Route: ${route}`);
    return(
       <Outlet context={obj}/>
    )
};

export default NewPosts;
