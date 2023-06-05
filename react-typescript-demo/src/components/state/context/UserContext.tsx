import { createContext, useState } from "react"
type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type ChildrenProps = {
    children: React.ReactNode
}
export type AuthUser = {
    name: string,
    email: string
}
export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({children}: ChildrenProps){
    const [user, setUser] = useState<AuthUser | null>(null)
    return <div>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    </div>
}