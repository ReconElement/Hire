import '../../App.css';
import { useParams } from 'react-router';
const PostExpand = ()=>{
    const {post} = useParams();
    return(
        <div>
            {post?parseInt(post):"0"} post is being displayed
        </div>
    )
};

export default PostExpand;