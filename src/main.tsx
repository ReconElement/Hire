import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './components/Login.tsx'
import Signup from './components/Signup.tsx'
import Post from './components/Post.tsx'
import Posts from './components/Posts/Posts.tsx';
import PostPage from './components/Posts/PostPage.tsx'
import PostDetail from './components/Posts/PostDetail.tsx'
import PostExpand from './components/Posts/PostExpand.tsx'
import Test from './components/Posts/Test.tsx'
import NewPosts from './components/Posts/NewPosts.tsx'
// import PostsPersist from './components/Posts/PostsPersist.tsx'
import './index.css';
// import App from './App.tsx'
import Landing from './components/Landing.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/post" element={<Post/>}/>
      {/* <Route path="/posts"> */}
        {/* <Route index element={<Posts/>}/> */}
        {/* On pressing on any individual post it should navigate to PostDetail of that specific post */}
        {/* <Route element={<PostDetail/>}>
          <Route path=":post" element={<PostExpand/>}/>
        </Route> */}
      {/* </Route> */}
        <Route path="/posts" element={<NewPosts/>}>
          <Route path=":page" element={<PostPage/>}/>
        </Route>
      <Route path="/test" element={<Test/>}/>
    </Routes>
  </StrictMode>
  </BrowserRouter>,
)
