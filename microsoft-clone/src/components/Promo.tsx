import windowslogo from '../assets/windowslogo.webp';
import explorelogo from '../assets/explorelogo.webp';
import xboxlogo from '../assets/xboxlogo.webp';

export default function Promo() {
  return (
    <div className="promo flex flex-col md:flex-row justify-center mt-5">
        <div className="item flex flex-col items-center md:space-x-6 ">
            <img className='w-12' src={windowslogo} alt="" />
            <span className='text-blue-600 underline cursor-pointer'>Choose your Microsoft 365</span>
        </div>
        <div className="item flex flex-col items-center md:space-x-6 ">
            <img className='w-12' src={explorelogo} alt="" />
            <span className='text-blue-600 underline cursor-pointer'>Explore Surface devices</span>
        </div>
        <div className="item flex flex-col items-center md:space-x-6 ">
            <img className='w-12' src={xboxlogo} alt="" />
            <span className='text-blue-600 underline cursor-pointer'>Buy Xbox games</span>
        </div>
        <div className="item flex flex-col items-center md:space-x-6 ">
            <img className='w-12' src={windowslogo} alt="" />
            <span className='text-blue-600 underline cursor-pointer'>Choose your Microsoft 365</span>
        </div>
    </div>
  )
}
