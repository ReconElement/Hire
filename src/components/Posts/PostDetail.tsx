import '../../App.css';
type Post = {
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date | null,
    authorId: number
}
const PostDetail = ({id,post}:{id: number, post: Post})=>{
    const postId = id.toString();
    const auth_id: string | null = localStorage.getItem('id');
    let match = false;
    if(auth_id){
        match = parseInt(auth_id) === id;
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
                    {match && <input type="button" value="Edit" className="m-2 p-2 shadow-sm shadow-lightblue rounded-md" />}
                </div>
            </div>
        </div>
    )
};

export default PostDetail;