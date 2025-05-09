import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {
    const { logged } = useContext( AuthContext )
    //if the user is authenticated, they are redirected to marvel and don't have to see the login page
    return ( !logged )
        ? children
        : <Navigate to='/marvel'/>
}
