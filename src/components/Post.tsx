import '../App.css';
import PostCard from './Posts/PostCard';
import Footer from './Landing/Footer';
import Titlebar from './Posts/Titlebar';
const Post = ()=>{
    return (
        <div className="flex flex-col justify-stretch bg-darkviolet overflow-hidden ">
            <Titlebar/>
            <div className="mt-11 flex justify-center">
                <PostCard/>
            </div>
            <div className="mt-24 flex justify-center">
                <Footer/>
            </div>
        </div>
    )
};

export default Post;