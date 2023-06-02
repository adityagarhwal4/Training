import './App.css'

function App() {

  return (
    <>
      <ul className='flex space-x-6'>
        <li className='flex flex-col text-center space-y-1'>
          <div className='relative rounded-full p-1 bg-gradient-to-tr from-yellow-400 to-red-700'>
          <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
            <img className='h-24 w-24 rounded-full' src="https://thumbs.dreamstime.com/b/young-purebred-abyssinian-cat-resting-sun-portrait-close-up-square-abyssinian-cat-square-close-up-224978351.jpg" height={'200px'} width={'200px'} alt="cute kitty" />
          </a>
          <button className='absolute right-1 bottom-1 h-6 w-6 bg-blue-400 rounded-full text-white font-mono font-semibold text-2xl flex justify-center items-center hover:bg-blue-800 border-2 border-white'>+</button>
          </div>
          <a href="#">You</a>
        </li>
        <li className='flex flex-col text-center space-y-1'>
          <div className='rounded-full p-1 bg-gradient-to-tr from-yellow-400 to-red-700'>
          <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
            <img className='h-24 w-24 rounded-full' src="https://thumbs.dreamstime.com/b/young-purebred-abyssinian-cat-resting-sun-portrait-close-up-square-abyssinian-cat-square-close-up-224978351.jpg" height={'200px'} width={'200px'} alt="cute kitty" />
          </a>
          </div>
          <a href="#">Kitty_Two</a>
        </li>
        <li className='flex flex-col text-center space-y-1'>
          <div className='rounded-full p-1 bg-gradient-to-tr from-yellow-400 to-red-700'>
          <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
            <img className='h-24 w-24 rounded-full' src="https://thumbs.dreamstime.com/b/young-purebred-abyssinian-cat-resting-sun-portrait-close-up-square-abyssinian-cat-square-close-up-224978351.jpg" height={'200px'} width={'200px'} alt="cute kitty" />
          </a>
          </div>
          <a href="#">Kitty_Three</a>
        </li>
        <li className='flex flex-col text-center space-y-1'>
          <div className='rounded-full p-1 bg-gradient-to-tr from-yellow-400 to-red-700'>
          <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
            <img className='h-24 w-24 rounded-full' src="https://thumbs.dreamstime.com/b/young-purebred-abyssinian-cat-resting-sun-portrait-close-up-square-abyssinian-cat-square-close-up-224978351.jpg" height={'200px'} width={'200px'} alt="cute kitty" />
          </a>
          </div>
          <a href="#">Kitty_Four</a>
        </li>
      </ul>
    </>
  )
}

export default App
