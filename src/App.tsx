import './App.css';
import { NavLink } from 'react-router';

const App = ()=> {

  return (
    <div className="bg-pink-500 text-blue-600">
        Omkar Panda
        <nav>
          <NavLink to="/about" end>
            About
          </NavLink><br/>
          <NavLink to="/projects" end>
            Projects
          </NavLink>
        </nav>
    </div>
  )
}

export default App;
