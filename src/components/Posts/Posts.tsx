import { useEffect } from 'react';
import { getPostAPICall } from '../../API/post';
import { useState } from 'react';
import {create} from 'zustand';
import '../../App.css';
type Post={
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date|null,
    authorId: number
};

interface PostsAPI{
    posts: {
        id: number,
        title: string,
        content: string,
        createdAt: Date,
        authorId: number,
        updatedAt: Date,
    }[] | undefined,
    loading: boolean,
    setLoading: (t: true | false)=>void,
    setPosts: (t: PostsAPI["posts"])=>void;
}

const usePostsStorage = create<PostsAPI>((set)=>({
    posts: undefined,
    loading: false,
    setLoading: (value: boolean)=>{
        set(()=>({
            loading: value,
        }));
    },
    setPosts: (value: PostsAPI["posts"])=>{
        set(()=>({
            posts: value
        }));
    }
}))
const Posts = ()=>{
    // const [loading, setLoading] = useState(false);
    // const [posts, setPosts] = useState<Post[] | undefined>(undefined);
    const {posts, loading, setLoading, setPosts} = usePostsStorage();
    let buf;
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
    }, []);
    
    return(
        <div>
            <button type="button">Wait for the fun bro: {loading?"present":"not present"}</button>
            {/* <div>{loading?posts[1].content:""}</div> */}
            {(loading && posts) && <div>{posts.map((value: Post, id: number)=><div><Expand key={value.id} value={value} id={id}/></div>)}</div>}
            {/* {(loading && posts) && <div><h1>SHIEET</h1></div>} */}
        </div>
    )
};

function Expand(props: {value: Post, id: number}){
    return(
        <div key={props.id}>
            <div>
                {props.value.title}
            </div>
        </div>
    )
}
export default Posts;
