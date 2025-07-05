import '../../App.css';
import { useState } from 'react';
import {create} from 'zustand';
type Post = {
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date | null,
    authorId: number
}
interface Content{
    data: {
        title?: string,
        content?: string
    }
    updateTitle?: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    updateContent?: (e: React.ChangeEvent<HTMLTextAreaElement>)=>void,
}
const useContents = create<Content>()((set)=>({
    data: {
        title: undefined,
        content: undefined,
    },
    updateTitle: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set(()=>({data: {title: e.target.value}}));
    },
    updateContent: (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set(()=>({data: {content: e.target.value}}));
    }
}));
const PostDetail = ({id,post}:{id: number, post: Post})=>{
    const {data, updateTitle, updateContent} = useContents();
    const [editFlag, setEditFlag] = useState(false);
    const postId = id.toString();
    const authId: string | null = localStorage.getItem('id');
    const authIdPost = post.authorId;
    console.log(`auth id as inferred from post = ${authIdPost}`);
    console.log(`authId = ${authId}`);
    let match = false;
    if(authId){
        match = parseInt(authId) === authIdPost;
    }
    const onClick = function(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        e.stopPropagation();
        setEditFlag(true);
    }
    return(
        <div id={postId} className='bg-darkviolet poppins-regular'>
            <div className="p-2 m-2 text-lightblue">
                <div className="text-2xl">
                    {post.id}
                </div>
                <div className="text-3xl">
                    {post.title}
                </div>
                <div className="">
                    {post.content}
                </div>
                <div>
                    {match && <button type="button" onClick={onClick} className="m-2 p-2 shadow-sm shadow-lightblue rounded-md active:shadow-none focus:shadow-sm" >Edit</button>}
                </div>
            </div>
            {match && editFlag?<div><Edit id={post.id} post={post} /></div>:<div></div>}
        </div> 
    )
};

const Display =({id, post}:{id: number, post: Post})=>{
    return(
        <div id={id.toString()} className="bg-darkviolet poppins-regular p-2 m-2">
            <div>
                {post.title}
            </div>
            <div>
                {post.content}
            </div>
        </div>
    )
}
// const Edit =({id, post}:{id: number, post: Post})=>{
//     const [value, setValue] = useState(post?.content || '');
//     const onSubmit = function(e: React.FormEvent<HTMLInputElement>){
//         e.preventDefault();
//         e.stopPropagation();
//         console.log(value);
//     }
//     const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         setValue(e.target.value);
//     }
//     return(
//         <div id={id.toString()} className="bg-darkviolet poppins-regular">
//             <div className="m-2 p-2">
//                 <input type="text" title="title" name="title" id="title" value={post.title} />
//             </div>
//             <div>
//                 <form action="">
//                     <textarea id="content" title="content" name="content" className="" value={value} onChange={onChange}></textarea>
//                     <input type="submit" value="Submit" onClick={onSubmit} />
//                 </form>
//             </div>
//         </div>
//     )
// }

const Edit = ({id, post, data, updateTitle, updateContent}:{id: number, post: Post, data: Content["data"], updateTitle: Content["updateTitle"],updateContent: Content["updateContent"] })=>{
    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log(data.title);
        console.log(data.content);
    }
    return(
        <div className="p-2 m-2 poppins-regular">
            <form action="" onSubmit={onSubmit}>
                <input type="text" name="title" id="title" value={data.title} placeholder={post.title} onChange={updateTitle}/>
                <textarea name="content" value={data.content} id="content" placeholder={post.content} onChange={updateContent}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default PostDetail;