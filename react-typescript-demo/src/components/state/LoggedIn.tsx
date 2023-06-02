import { useState } from "react"

export default function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h2>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</h2>
    </div>
  )
}
