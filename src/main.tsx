import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './components/Login.tsx'
import Signup from './components/Signup.tsx'
import Post from './components/Post.tsx'
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
        {/* Post routings to be placed here */}
      </Route>
    </Routes>
  </StrictMode>
  </BrowserRouter>,
)
