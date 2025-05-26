import '../App.css';
import Titlebar from './Landing/Titlebar';
import Content from './Landing/Content';
import Footer from './Landing/Footer';
const Landing = ()=>{
    return(
        <div className="flex flex-col justify-stretch bg-darkviolet overflow-hidden">
            <Titlebar/>
            <Content/>
            <div className="flex justify-center">
                <Footer/>
            </div>
        </div>
    )
}
export default Landing;
/**
 * Note:  https://www.material-tailwind.com/docs/html/card#blog-card
 */