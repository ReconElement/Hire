import '../../App.css';
const LoginCard2 =()=>{
    
    return (
        <div className="py-2 px-2 text-lightviolet poppins-regular mx-2 my-2 max-w-1/4 rounded-md bg-gradient-to-r from-darkviolet to-lightviolet">
            <div className="flex justify-center text-3xl p-2">
                Login
            </div>
            <div className="flex flex-col">
                <input type="text" name="username/email" id="username/email" placeholder='username or email' className="p-2 m-2 bg-darkviolet text-lightviolet outline-none rounded-xl shadow-sm shadow-emerald-400" />
                <input type="password" name="password" id="password" placeholder='password' className="p-2 m-2 bg-darkviolet text-lightviolet outline-none rounded-xl shadow-sm shadow-emerald-400" />
            </div>
            <div className="flex justify-center">
                {/* <button className='p-2 m-2 bg-darkviolet text-lightviolet rounded-2xl shadow-emerald-400'>Login</button> */}
                <input type="submit" value="Submit" id="submit" className="p-2 m-2 bg-darkviolet text-lightviolet rounded-2xl shadow-md shadow-emerald-400 active:shadow-none"/>
            </div>
        </div>
    )
};

export default LoginCard2;
