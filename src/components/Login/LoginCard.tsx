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
                    <input type="password" placeholder='Your password' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"/>
                 </div>
                 <div className='inline-flex items-center mt-2'>
                    <label htmlFor="check-2" className="flex items-center cursor-pointer relative">
                        <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 chechked:border-slate-800" id="check2" />
                        <span className='absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 ' viewBox='0 0 20 20' fill='currentColor' stroke='currentColor' strokeWidth='1'>
                            <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010'/>
                        </svg>
                        </span>
                    </label>
                 </div>
            </div>
        </div>
    )
};

export default LoginCard;