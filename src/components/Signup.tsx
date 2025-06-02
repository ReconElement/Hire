import '../App.css';
import SignupCard from './Signup/SignupCard';
import Titlebar from './Landing/Titlebar';
import Footer from './Landing/Footer';
import DisplayCards from './Landing/DisplayCards';
const Signup = ()=>{
    return (
        <div className="">
            <div className="flex flex-col justify-stretch bg-darkviolet overflow-hidden">
            
            {/* <LoginCard/> */}
            <nav className="">
                <Titlebar/>
            </nav>
            <div className="mt-6 flex justify-center">
                <SignupCard/>
            </div>
            <div className="mt-32">
                <DisplayCards/>
            </div>
            <div className="mt-11 flex justify-center">
                <Footer/>
            </div>
        </div>
        </div>
    )
}

export default Signup;

