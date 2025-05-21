import '../../App.css';
const SignupCard =()=>{
    return(
        <div className="px-3 py-3 mt-4">
            <div className="poppins-regular text-lightviolet bg-gradient-to-r max-w-1/3 min-w-xs rounded-md from-lightviolet to-darkviolet ">
                <div className='flex justify-center text-3xl py-2'>
                    Signup
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="text" name="firstname" id="firstname" placeholder="First Name" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none shadow-sm"/>
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none"/>
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="email" name="email" id="email" placeholder="Email" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl min-w-md outline-none" />
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="text" name="username" id="username" placeholder="Username" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl min-w-md outline-none"/>
                </div>
                <div className="flex flex-row justify-left p-2">
                    <input type="password" name="password" id="password" placeholder="Password" className='p-2 m-2 bg-darkviolet text-lightviolet rounded-xl min-w-md outline-none'/>
                </div>  
            </div>
        </div>
    )
};

export default SignupCard;