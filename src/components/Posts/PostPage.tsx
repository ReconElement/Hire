import '../../App.css';
import {useParams} from 'react-router';
import PostListCard from './PostListCard';
import { getPostAPICall } from '../../API/post';
import { useEffect } from 'react';
import {create} from 'zustand';
import '../../App.css';
import TitleBar from '../Posts/Titlebar';
import Footer from '../Landing/Footer';

type Post={
    id: number, 
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date | null,
    authorId: number
}

interface PostsAPI{
    posts: Post[] | undefined,
    loading: boolean,
    setLoading: (t: boolean)=>void,
    setPosts: (t: PostsAPI["posts"])=>void,
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
    }
}));
const PostPage = ()=>{
    const {page} = useParams();
    const {posts, loading, setLoading, setPosts} = usePostsStorage();
    let buf;
    useEffect(()=>{
        const getPosts =async ()=>{
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
    },[])
    let totalPage;
    if(posts){
        totalPage = Math.ceil(posts.length/9);
    }
    else{
        totalPage = 1;
    }
    console.log(totalPage);
    
    return(
        <div>Hello World: {page}</div>
    )
};

export default PostPage;
