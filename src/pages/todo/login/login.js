import { useNavigate } from 'react-router'
import { Modal } from '../../../components/modal'

export const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <>
      <Modal
        label="logue aqui"
        title="formulario de login">
        <form>
          <input type="text" placeholder="Login:" />
          <input type="text" placeholder="Senha:" />
          <button type="button" onClick={handleClick}>
            Logar!
          </button>
        </form>
      </Modal>
    </>
  )
}
