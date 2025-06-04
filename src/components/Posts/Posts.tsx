import { useEffect } from 'react';
import { getPostAPICall } from '../../API/post';
import PostListCard from './PostListCard';
import {create} from 'zustand';
import '../../App.css';
import TitleBar from '../Posts/Titlebar';
import Footer from '../Landing/Footer';
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

const usePostsStorage = create<PostsAPI>()((set)=>({
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
    let totalPage;
    if(posts){
        totalPage=Math.ceil(posts.length % 9)+1;
    }
    else{
        totalPage=1;
    }
    console.log(totalPage)
    return(
        <div className="bg-darkviolet min-h-screen">
            <div>
                <TitleBar/>
            </div>
            <div className=' pt-12 px-2'>
                {(loading && posts) && <div className="flex justify-left flex-wrap">{posts?.map((val: Post, id: number)=>(<div><PostListCard value={val} id={val.id}/></div>))}</div>}
            </div>
            <div className="flex justify-center p-2"><Footer/></div>
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
//going for a piss will come back.


