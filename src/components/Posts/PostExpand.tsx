import '../../App.css';
import { useParams } from 'react-router';
import { useOutletContext } from 'react-router';
import { create } from 'zustand';
import { useEffect } from 'react';
import { getPostAPICall } from '../../API/post';
import PostDetail from './PostDetail';
import { useNavigate } from 'react-router';
type Posts={
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date | null,
    authorId: number
}[] | undefined;
interface PostsAPI{
    posts: Posts,
    loading: boolean,
    setLoading: (t: boolean)=>void,
    setPosts: (t: Posts)=>void,
}
const usePostsStorage = create<PostsAPI>()((set)=>({
    posts: undefined,
    loading: false,
    setLoading: (value: boolean)=>{
        set(()=>({
            loading: value
        }))
    },
    setPosts: (value: PostsAPI["posts"])=>{
        set(()=>({
            posts: value
        }))
    },
}))
const PostExpand = ()=>{
    const navigate = useNavigate();
    const {postRoute} = useParams();
    const {route, setRoute} = useOutletContext();
    const {posts, loading, setLoading, setPosts} = usePostsStorage();
    let buf;
    setRoute(postRoute);
    useEffect(()=>{
        const getPosts = async ()=>{
            try{
                buf = await getPostAPICall();
            }
            catch(e){
                console.log(e);
            }
            if(buf){
                buf = buf?.data;
                setPosts(buf);
                setLoading(true);
            }
        }
        getPosts();
    },[route]);
    const beginRoute = 1;
    const endRoute = posts?.[posts.length-1].id;
    //shift the post array by 1 
    if(route<beginRoute){
        navigate(`/posts/${beginRoute}`);
    }
    if(route>endRoute){
        navigate(`/posts/${endRoute}`);
    }
    // console.log(`Begins ${beginRoute}`);
    // console.log(`Ends at ${endRoute}`);
    return(
        <div>
            <div>
                {/* { loading && posts?.map((post)=>(
                    <div><PostDetail id={post.id} post={post}/></div>
                ))} */}
            </div>
            <div>
                {loading && posts && (<div><PostDetail post={posts[route-1]} id={posts[route-1].id}/></div>)}
            </div>
        </div>
    )
};

export default PostExpand;
