
import '../../App.css';
import { useNavigate } from 'react-router';
type Post = {
    id: number,
    title: string,
    content: string,
    createdAt: Date;
    updatedAt: Date | null,
    authorId: number
}
//first deal with sample data 

const PostListCard = (props: {value: Post, id: number, values: Post[]})=>{
    const navigate = useNavigate();
    function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        e.stopPropagation();
        console.log(`Local post id: ${props.id}`);
        let idMatch = function(){
            for(let i=0; i<props.values.length; i++){
                if(props.value.title.includes(props.values[i].title)){
                    return i+1;
                }
            }
        }
        const routeDirect = idMatch();
        if(routeDirect){
            navigate(`/posts/${routeDirect}`);
        }
        else{
            console.log("Some problem ocurred");
        }
    }
    return(
        <div key={props.id} className="p-2 m-2 max-h-48  bg-gradient-to-r text-lightblue from-lightviolet to-darkviolet border-sm rounded-md max-w-md">
            <div className="p-2 poppins-medium">
                {props.value.title}
            </div>
            <div className="p-2 poppins-extralight overflow-hidden text-nowrap text-ellipsis">
                {props.value.content}
            </div>
            <div className="p-2">
                <button onClick={onClick} className="text-darkviolet p-2 m-2 shadow-sm shadow-lightblue rounded-2xl poppins-bold active:shadow-none focus:shadow-sm">Expand</button>
            </div>
        </div>
    )
};

export default PostListCard;
