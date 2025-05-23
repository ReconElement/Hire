import '../../App.css';
//this file is a trial file that deals with some size changes
const SignUpCardSize = ()=>{
    
    return(
        <div className="px-3 py-3 mt-4 ">
            <div className="poppins-regular text-lightviolet bg-gradient-to-r  rounded-md from-lightviolet to-darkviolet ">
                <div className='flex justify-center text-3xl py-2 '>
                    Signup
                </div>
                <div className="flex flex-row justify-centre p-2">
                    <input type="text" name="firstname" id="firstname" placeholder="First Name" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none shadow-sm shadow-lightblue"/>
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl outline-none shadpw-sm shadow-lightblue"/>
                </div>
                <div className="flex flex-row justify-centre p-2 ">
                    <input type="email" name="email" id="email" placeholder="Email" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-xl container outline-none shadow-lightblue shadow-sm" />
                </div>
                <div className="flex flex-row justify-centre p-2 ">
                    <input type="text" name="username" id="username" placeholder="Username" className="p-2 m-2 bg-darkviolet text-lightviolet container  rounded-xl outline-none shadow-lightblue shadow-sm"/>
                </div>
                <div className="flex flex-row justify-centre p-2 ">
                    <input type="password" name="password" id="password" placeholder="Password" className='p-2 m-2 bg-darkviolet text-lightviolet container rounded-xl outline-none shadow-lightblue shadow-sm'/>
                </div>
                <div className="flex flex-row justify-center p-2 text-lightviolet">
                    <button type="submit" className="p-2 shadow-md shadow-lightblue rounded-xl hover:bg-darkblue active:shadow-none">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpCardSize;