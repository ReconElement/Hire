import '../../App.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
    setTitle?: (title: string)=>void,
    setContent?: (content: string)=>void,
}
const useContents = create<Content>()((set)=>({
    data: {
        title: undefined,
        content: undefined,
    },
    updateTitle: (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({data: {title: e.target.value, content: state.data.content}}));
    },
    updateContent: (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        e.preventDefault();
        e.stopPropagation();
        set((state)=>({data: {content: e.target.value, title: state.data.title}}));
    },
    setTitle: (title: string)=>{
        set((state)=>({data: {title: title, content: state.data.content}}))
    },
    setContent: (content: string)=>{
        set((state)=>({data: {content: content, title: state.data.title}}))
    }
}));
type setShow = {
	setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
}
const DeleteCard = ({setShowDelete}:setShow)=>{
	const onClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
		e.preventDefault();
		e.stopPropagation();
		setShowDelete(false);
	}
	return(
		<div className="flex flex-col fixed top-12 text-lightblue left-42 bg-gradient-to-r from-lightviolet to-darkviolet p-2 m-2 shadow-sm shadow-lightblue poppins-regular rounded-md">
			<div>
				<span>
					Do you want to delete this post?
				</span>
			</div>
			<div>
				<button onClick={onClick} className="p-2 m-2 shadow-sm shadow-lightblue active:shadow-none focus:shadow-sm rounded-md">Yes</button>
			</div>
			<div>
				<button onClick={onClick} className="p-2 m-2 shadow-sm shadow-lightblue active:shadow-none focus:shadow-sm rounded-md">Cancel</button>
			</div>
		</div>
	)
}
const ShowDeleteCard = ({setShowDelete}: setShow)=>{
	return createPortal(
		<div>
			<DeleteCard setShowDelete={setShowDelete}/>
		</div>,
		document.body
	)
}
const PostDetail = ({id,post}:{id: number, post: Post})=>{
	const [showDelete, setShowDelete] = useState<boolean>(false);
    const {data, updateTitle, updateContent, setTitle, setContent} = useContents();
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
    useEffect(()=>{
            setTitle?.(post.title);
            setContent?.(post.content);
    },[]);
	const onClickDelete=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
		e.preventDefault();
		e.stopPropagation();
		setShowDelete(true);
	}
    return(
        <div id={postId} className='bg-gradient-to-r from-lightviolet to-darkviolet poppins-regular'>
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
					<div className="flex flex-row">
                		<div>
                    		{match && <button type="button" onClick={onClick} className="m-2 p-2 shadow-sm shadow-lightblue rounded-md active:shadow-none focus:shadow-sm" >Edit</button>}
                		</div>
						<div>
							{match && <button type="button" onClick={onClickDelete} className="m-2 p-2 shadow-sm shadow-lightblue rounded-md active:shadow-none focus:shadow-sm">Delete</button>}
						</div>
					</div>
            	</div>
				{showDelete && <div><ShowDeleteCard setShowDelete={setShowDelete}/></div>}
            {match && editFlag?<div><Edit id={post.id} post={post} data={data} updateTitle={updateTitle} updateContent={updateContent}/></div>:<div></div>}
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
        <div className="p-2 m-2 poppins-regular text-lightblue bg-gradient-to-r from-lightviolet to-darkviolet">
            <form className="flex flex-col" action="" onSubmit={onSubmit}>
                <input type="text" className="p-2 m-2 outline-2 outline-offset-2 outline-solid outline-darkblue rounded-2xl" name="title" id="title" title="title" value={data.title || post.title} onChange={updateTitle}/>
                <textarea name="content" rows={8} cols={5} className="p-2 m-2 outline-2 outline-offset-2 outline-solid outline-darkblue rounded-2xl resize-none" value={data.content || post.title} title="content" id="content" onChange={updateContent}></textarea>
                <div className="flex justify-center"><button type="submit" className="p-2 m-2 shadow-sm shadow-lightblue rounded-md active:shadow-none focus:shadow-sm">Submit</button></div>
            </form>
        </div>
    )
};

export default PostDetail;