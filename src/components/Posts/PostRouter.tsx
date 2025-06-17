import { Outlet } from 'react-router';
import '../../App.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

const PostRouter =()=>{
    const navigate = useNavigate();
    const [route, setRoute] = useState<number>(1);
    useEffect(()=>{
        navigate(`/posts/${route}`);
    },[route]);
    const obj = {
        route: route,
        setRoute: setRoute
    };
    console.log(`Route: ${route}`);
    return(
        <div>
            <Outlet context={obj}/>
        </div>
    )
};
export default PostRouter;