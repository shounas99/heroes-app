import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()

  const onLogin = () => {
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
