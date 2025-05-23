import '../App.css';
import SignupCard from './Signup/SignupCard';
import Titlebar from './Landing/Titlebar';
import SignUpCardSize from './Signup/SignUpCardSize';
const Signup = ()=>{
    return (
        <div>
            <Titlebar/>
            {/* <SignupCard/> */}
            <SignUpCardSize/>
        </div>
    )
}

export default Signup;

