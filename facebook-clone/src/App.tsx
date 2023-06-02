import './App.css'

function App() {

  return (
    <>
      <div className='border bg-gray-100 h-screen w-screen'>
        <div className="container mt-36 flex justify-center items-center">
          <div className="left w-1/3 mx-14">
            <img className='w-80' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            <p className="text-3xl mx-6">Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className="right flex flex-col bg-white p-8 rounded-lg w-1/4 text-lg relative">
            <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg outline-blue-600' type="text" placeholder='Email address or phone number' />
            <input className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg outline-blue-600' type="password" placeholder='Password' />
            <button className='bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold'>Log In</button>
            <span className='text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline'>Forgotten password?</span>
            <hr className='my-2' />
            <button className='bg-green-600 hover:bg-green-700 text-white mx-auto my-2 px-4 py-3 rounded-md font-bold'>Create New Account</button>
            <span className='absolute -bottom-10 text-sm'><span className='font-bold hover:underline cursor-pointer'>Create a Page</span> for a celebrity, brand or business.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
