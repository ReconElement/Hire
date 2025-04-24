import './App.css';
import { NavLink } from 'react-router';

const App = ()=> {

  return (
    <div className="bg-lightviolet text-darkviolet">
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
