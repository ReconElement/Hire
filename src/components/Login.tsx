import '../App.css';
// import LoginCard from './Login/LoginCard';
// import LoginCard2 from './Login/LoginCard2';
import LoginCardPage from './Login/LoginCardPage';
import Titlebar from './Login/Titlebar';
import Footer from './Landing/Footer';
import DisplayCards from './Landing/DisplayCards';
// import ZusTest from './Login/ZusTest';
const Login = ()=>{
    
    return(
        <div className="flex flex-col justify-stretch bg-darkviolet overflow-hidden">
            
            {/* <LoginCard/> */}
            <Titlebar/>
            <div className="mt-2.5 flex justify-center">
                <LoginCardPage/>
            </div>
            <div className="mt-32">
                <DisplayCards/>
            </div>
            <div className="mt-11 flex justify-center">
                <Footer/>
            </div>
        </div>
    )
}

export default Login;