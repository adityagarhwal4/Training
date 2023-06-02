import { useState } from 'react'

type UserData = {
    name: string,
    email: string
}

export default function User() {
    const [user, setUser] = useState<null | UserData>(null);
    const handlelogin = () => {
        setUser({
            name: 'Aditya',
            email: 'adityagarhwal4@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handlelogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h3>User name is {user?.name}</h3>
            <h3>User eamil is {user?.email}</h3>
        </div>
    )
}
