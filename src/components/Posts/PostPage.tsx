import "../../App.css";
import { useParams } from "react-router";
import PostListCard from "./PostListCard";
import { getPostAPICall } from "../../API/post";
import { useEffect } from "react";
import { create } from "zustand";
import "../../App.css";
import { useOutletContext } from "react-router";
import TitleBar from "../Posts/Titlebar";
import Footer from "../Landing/Footer";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
  authorId: number;
};

interface PostsAPI {
  posts: Post[] | undefined;
  loading: boolean;
  setLoading: (t: boolean) => void;
  setPosts: (t: PostsAPI["posts"]) => void;
}
const usePostsStorage = create<PostsAPI>()((set) => ({
  posts: undefined,
  loading: false,
  setLoading: (value: boolean) => {
    set(() => ({
      loading: value,
    }));
  },
  setPosts: (value: PostsAPI["posts"]) => {
    set(() => ({
      posts: value,
    }));
  },
}));
// interface OutletProps{
//     setRoute: React.Dispatch<React.SetStateAction<string | undefined>>
// }
const PostPage = () => {
  let beginIndex = 0;
  let endIndex = 0;
  const { page } = useParams();
  const { posts, loading, setLoading, setPosts } = usePostsStorage();
  const { route, setRoute } = useOutletContext();
  setRoute(page);
  //state for pagination 
  const [state, setState] = useState<number>(1);
  let buf;
  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      try {
        buf = await getPostAPICall();
      } catch (e) {
        console.log(e);
      }
      if (buf) {
        buf = buf?.data;
        setPosts(buf);
        setLoading(true);
      }
    };
    getPosts();
  }, [route]);
  let totalPage: number;
  // let displayNow = posts?.slice(0, 9);
  let displayNow;
  if (posts) {
    totalPage = Math.ceil(posts.length / 9);
    // totalPage = Math.ceil(posts_length/9);
    if (route > totalPage) {
      setRoute(totalPage);
    }
  } else {
    totalPage = 1;
  }
  if (posts && page) {
    //let us set the posts.length to see how stuff pans out at 210 posts
    beginIndex = posts.length - 9 * parseInt(page) - 1;
    // beginIndex = posts_length - (9*parseInt(page));
    beginIndex = Math.abs(beginIndex);
    endIndex = Math.abs(beginIndex + 9);
    displayNow = posts.slice(beginIndex, endIndex);
  }
  // useEffect(()=>{
  //   function check(){
  //     if(route<totalPage){
  //       setState(route);
  //       console.log(`Route value inside useEffect fn check() ${route}`);
  //     }
  //     else{
  //       setState(totalPage);
  //     }
  //     console.log(`Total Page: ${totalPage}`);
  //   };
  //   check();
  // },);
  // console.log(`State: ${state}`);
  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number)=>{
    e.preventDefault();
    e.stopPropagation();
    navigate(`/posts/${value}`);
    setState(value);
    console.log(`Changing value by clicking on the pagination component: ${value}`)
  }
  return (
    // <div>
    //     <div>
    //         {route}
    //     </div>
    //     <div>
    //         {beginIndex}
    //     </div>
    //     <div>
    //         {endIndex}
    //     </div>
    //     <div>
    //         {
    //             (posts && displayNow) && (<div>
    //                 {displayNow.map((value: Post, index: number)=>(<div><PostListCard value={value} id={value.id} /></div>))}
    //             </div>)
    //         }
    //     </div>
    // </div>
    <div className="bg-darkviolet min-h-screen">
      <div>
        <TitleBar />
      </div>
      <div className=" pt-20 px-2 h-screen overflow-y-hidden">
        {loading && posts && (
          <div className="flex justify-left flex-wrap">
            {displayNow?.map((val: Post, id: number) => (
              <div>
                <PostListCard value={val} id={val.id} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Stack spacing={2}>
            <Pagination count={totalPage} page={state} defaultPage={route} color={"primary"} onChange={handlePageChange}/>
        </Stack>
      </div>
      <div className="flex justify-center p-2">
        <Footer />
      </div>
    </div>
  );
};

export default PostPage;
