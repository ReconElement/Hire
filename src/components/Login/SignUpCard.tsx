import '../../App.css';
const SignUpCard = ()=>{
    return (
        <div className='py-2 px-2 ml-2 mr-2 mt-2 max-w-lg poppins-medium bg-darkviolet text-lightviolet p-2 rounded-md bg-gradient-to-r from-lightblue to-darkviolet'>
            <div className='flex flex-row'>
                <div className="m-2">
                    <input type="text" className="bg-lightblue text-darkblue rounded-xl p-1 hover:bg-gray-700 hover:text-yellow-700 focus:bg-gray-700 focus:text-yellow-700 focus:outline-none shadow-amber-400 shadow-sm" id="firstname" placeholder='first name' />
                </div>
                <div className="m-2">
                    <input type="text" className="bg-lightblue text-darkblue rounded-xl p-1 hover:bg-gray-700 hover:text-yellow-700 focus:bg-gray-700 focus:text-yellow-700 focus:outline-none shadow-amber-400 shadow-sm" id="secondname" placeholder='last name' />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="m-2">
                    <input type="text" className="bg-lightblue min-w-md text-darkblue rounded-xl p-1 hover:bg-gray-700 hover:text-yellow-700 focus:bg-gray-700 focus:text-yellow-700 focus:outline-none shadow-amber-400 shadow-sm" id="email" placeholder="email" />
                </div>
            </div>
        </div>
    )
};

export default SignUpCard;
