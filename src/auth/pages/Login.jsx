import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Login = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()

  const onLogin = () => {
    login('Cris')

    navigate('/', {
      replace: true // don't show the history
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        onClick={ onLogin }
        className="btn btn-primary"
      >
        Login
      </button>

    </div>
  )
}
