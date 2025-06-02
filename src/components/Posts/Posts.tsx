import { Outlet } from 'react-router';
import '../../App.css';
function Posts(){
    return(
        <div>
            <h1>
                Under ideal scenario you should be seeing posts here
            </h1>
            <Outlet/>
        </div>
    )
};

export default Posts;
