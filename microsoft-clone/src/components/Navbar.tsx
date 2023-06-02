import logo1 from '../assets/logo1.png';
import searchicon from '../assets/searchicon.png';
import carticon from '../assets/cartlogo.png';
import accounticon from '../assets/accounticon.png'

export default function Navbar() {
    return (
        <div className="navbar flex justify-between p-4 mx-28">
            <div className="flex md:order-2">
                <div className="hamburger cursor-pointer md:hidden">
                    <div className="line h-0.5 w-6 my-1 bg-black"></div>
                    <div className="line h-0.5 w-6 my-1 bg-black"></div>
                    <div className="line h-0.5 w-6 my-1 bg-black"></div>
                </div>
                <div className="search md:hidden">
                    <img className='w-6 ms-6 cursor-pointer' src={searchicon} alt="" />
                </div>
            </div>
            <div className="logo md:order-1 flex">
                <div className=''>
                    <img className='w-24 mt-1 cursor-pointer' src={logo1} alt="" />
                </div>
                <div className="features absolute inset-0 w-fit h-fit -translate-x-36 bg-gray-400 md:bg-white md:flex md:space-x-2 md:translate-x-56 p-4 md:mt-1">
                    <div className="fitems cursor-pointer text-sm hover:underline">Microsoft 365</div>
                    <div className="fitems cursor-pointer text-sm hover:underline">Teams</div>
                    <div className="fitems cursor-pointer text-sm hover:underline">Windows</div>
                    <div className="fitems cursor-pointer text-sm hover:underline">Surface</div>
                    <div className="fitems cursor-pointer text-sm hover:underline">Xbox</div>
                    <div className="fitems cursor-pointer text-sm hover:underline">Support</div>
                </div>
            </div>
            <div className="cart md:order-3 flex text-sm mt-1">
                <div className="search hidden md:flex">
                    <p className='me-3 cursor-pointer hover:underline'>All Microsoft</p>
                    <p className='hidden lg:inline-block ms-3 me-1 cursor-pointer hover:underline'>Search</p>
                    <img className='w-6 mx-0 cursor-pointer' src={searchicon} alt="" />
                </div>
                <div className='flex'>
                    <div className="cart flex mx-2">
                        <p className='hidden lg:inline-block ms-3 me-1 cursor-pointer hover:underline'>Cart</p>
                        <img className='w-6 mx-0 cursor-pointer' src={carticon} alt="" />
                    </div>
                    <div className="account flex mx-2">
                        <p className='hidden lg:inline-block ms-3 me-1 cursor-pointer'>Sign in</p>
                        <img className='w-6 mx-0 cursor-pointer' src={accounticon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
