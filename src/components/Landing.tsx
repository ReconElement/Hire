import '../App.css';
import Titlebar from './Landing/Titlebar';
import Content from './Landing/Content';
const Landing = ()=>{
    return(
        <div className="flex flex-col justify-stretch">
            <Titlebar/>
            <Content/>
        </div>
    )
}

export default Landing;