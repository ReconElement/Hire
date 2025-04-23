import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>} />
      </Route>
    </Routes>
  </StrictMode>
  </BrowserRouter>,
)
