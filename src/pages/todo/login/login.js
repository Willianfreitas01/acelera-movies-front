import { useNavigate } from 'react-router'

export const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Login:" />
        <input type="text" placeholder="Senha:" />
        <button type="button" onClick={handleClick}>
          Logar!
        </button>
      </form>
    </>
  )
}
