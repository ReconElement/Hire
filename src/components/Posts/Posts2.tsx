import '../../App.css';
import {z} from "zod/v4";
import { getPostAPICall } from '../../API/post';
import { useEffect, useState } from 'react';
const Post = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    authorId: z.number()
});

type Post={
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date|null,
    authorId: number
}
const Posts2 = ()=>{
    let buf;
    let post: Post;
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const getData = async ()=>{
            try{
                buf = await getPostAPICall();
            }
            catch(e){
                console.log(e);
            }
            if(buf){
                setLoading(true);
            }
            console.log(loading);
        }
        getData();
    },[loading]);
    return(
        <div>
            Something is written here
        </div>
    )
}
export default Posts2;
