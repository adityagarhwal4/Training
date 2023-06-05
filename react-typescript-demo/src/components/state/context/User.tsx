import { useContext } from "react"
import { UserContext } from "./UserContext"
export default function User() {
    const data = useContext(UserContext)
    const handleLogin = () => {
        if(data){
            data.setUser({
                name: 'Aditya',
                email: 'Garhwal'
            })
        }
    }
    const handleLogout = () => {
        data?.setUser(null);
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h4>User name is {data?.user?.name} </h4>
        <h4>User email is {data?.user?.email}</h4>
    </div>
  )
}
