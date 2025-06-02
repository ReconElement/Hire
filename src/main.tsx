import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './components/Login.tsx'
import Signup from './components/Signup.tsx'
import Post from './components/Post.tsx'
import Posts from './components/Posts/Posts.tsx'
import PostsLayout from './components/Posts/PostsLayout.tsx'
import PostExpand from './components/Posts/PostExpand.tsx'
import EditPost from './components/Posts/EditPost.tsx'
import './index.css'
// import App from './App.tsx'
import Landing from './components/Landing.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/post" element={<Post/>}>
          <Route path="posts">
            <Route index element={<Posts/>}/> 
            <Route element={<PostsLayout/>}>
              <Route path=":pid" element={<PostExpand/>}/>
              <Route path=":pid/edit" element={<EditPost/>}>
            </Route>
          </Route>
      </Route>
      </Route>
    </Routes>
  </StrictMode>
  </BrowserRouter>,
)
