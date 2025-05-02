import '../../App.css';
import Card from '../../assets/Card';
import { useNavigate } from 'react-router';
const Content = ()=>{
    const navigate = useNavigate();
    const signup = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        navigate('/signup');
    }
    return (
        <div className="py-18 px-3 ">
            <div>
                <span className="flex justify-center poppins-bold text-4xl">Find your dream job now!</span>
            </div>
            <div>
                <span className="flex justify-center poppins-light text-2xl">More than 5 lac+ jobs for you to find</span>
            </div>
            <div>
                <Card title="Practice customised mock interview with AI!" content="Your result will be visible only to you" buttonContent="Sign up now!" func={signup} />
            </div>
        </div>
    )
}

export default Content;