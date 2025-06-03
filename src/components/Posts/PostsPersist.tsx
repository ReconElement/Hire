import {useEffect} from 'react';
import { getPostAPICall } from '../../API/post';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import '../../App.css';
type Post={
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    authorId: number
}

interface PostsAPI{
    posts: Post[] | undefined,
    loading: boolean,
    setLoading: (t: true|false)=>void,
    setPosts: (t: PostsAPI["posts"])=>void,
}

const usePostsStorage = create<PostsAPI>()((persist((get, set)=>({
    posts: undefined,
    loading: false,
    setLoading: (value: boolean)=>(()=>({
        loading: value,
    })),
    setPosts: (value: PostsAPI["posts"])=>(()=>({
        posts: value
    }))
}),
    {
        name: "posts-storage",
        storage: createJSONStorage(()=>sessionStorage)
    }
)));
const PostsPersist =()=>{
    const {posts, loading, setLoading, setPosts} = usePostsStorage();
    let buf;
    useEffect(()=>{
        const getPosts = async ()=>{
            try{
                buf = await getPostAPICall();
            }catch(e){
                console.log(e);
            }
            if(buf){
                buf=buf?.data;
                setPosts(buf);
                setLoading(true);
            }
        }
        getPosts();
    }, [loading])
    console.log(posts)
    return(
        <div>
            {(loading && posts) && <div>{posts.map((value: Post, id: number)=><div><Expand key={value.id} value={value} id={id}/></div>)}</div>}
        </div>
    )
};

export default PostsPersist;
