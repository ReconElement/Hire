import '../../App.css';
const LoginCard = ()=>{
    return(
        <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 w-96 rounded-lg my-6">
            <div className="relative m-2.5 items-center flex justify-center text-white h-24 rounded-md bg-slate-800">
                <h3 className="text-2xl poppins-light">
                    Login
                </h3>
            </div>
            <div className='flex flex-col gap-4 p-6'>
                <div className="w-full max-w-sm min-w-[200px] poppins-regular">
                    <label className="block mb-2 text-sm text-slate-600" htmlFor="">
                        Email
                    </label>
                    <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow " placeholder="Your email"/>
                </div>
                <div className="w-full max-w-sm min-w-[200px] poppins-regular">
                        <label className="block mb-2" htmlFor="">
                            Password
                        </label>
                </div>
            </div>
        </div>
    )
};

export default LoginCard;