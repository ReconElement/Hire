import { Outlet } from 'react-router';
import '../../App.css';
const PostDetail =()=>{
    return(
        <div>
            <h1>Post Detail</h1>
            <div>
                <Outlet/>
            </div>
        </div>
    )
};
export default PostDetail;