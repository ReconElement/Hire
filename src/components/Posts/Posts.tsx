import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { getPostAPICall } from '../../API/post';
import { useState } from 'react';
import '../../App.css';
type Post={
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date|null,
    authorId: number
}
function Posts(){
    const [loading, setLoading] = useState(false);
    let posts: Post[];
    let buf;
    useEffect(()=>{
        const getPosts = async ()=>{
            try{
                buf = await getPostAPICall();
                posts = buf?.data as Post[];
            }
            catch(e){
                return e;
            }
            if(posts){
                setLoading(!loading)
            }
            console.log(posts);
            return posts;
        }
        getPosts();
    },[])
    return(
        <div>
            
        </div>
    )
};

export default Posts;
