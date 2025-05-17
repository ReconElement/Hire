import '../App.css';
import Titlebar from './Landing/Titlebar';
import Content from './Landing/Content';
import Footer from './Landing/Footer';
import Iterate from './Landing/Test';
const Landing = ()=>{
    return(
        <div className="flex flex-col justify-stretch bg-darkviolet">
            <Titlebar/>
            <Content/>
            <Footer/>
            <Iterate/>
        </div>
    )
}

export default Landing;
/**
 * Note:  https://www.material-tailwind.com/docs/html/card#blog-card
 */
