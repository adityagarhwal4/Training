import smimg1 from '../assets/smimg1.avif';

export default function Slider() {
    return (
        <div className="slider flex flex-col-reverse md:justify-between md:flex-row bg-white md:bg-[#b9daf9] ms-2">
            <div className="left flex flex-col justify-start items-start md:items-baseline py-12 ms-20 my-10">
                <h1 className='text-4xl ms-5 inline-block'>Microsoft 365</h1>
                <p className='w-3/4 ms-5 md:text-start inline-block'>Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps</p>
                <div className='flex'>
                    <button className='text-white bg-blue-600 px-4 py-2 rounded-sm ms-0 mt-6'>For one person</button>
                    <button className='text-blue-600 rounded-sm ms-5 mt-6 md:text-black hover:underline font-semibold'>For upto six people</button>
                </div>
            </div>
            <div className="right">
                <img className='w-[70rem] md:w-auto' src={smimg1} alt="" />
            </div>
        </div>
    )
}
