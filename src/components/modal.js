import { useState } from 'react'
import './modal.css'
export const Modal = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <>
      <button onClick={handleClick} className='buttonClick'>Clique aqui!</button>
      {toggle && (<div className="modal-conteiner">
        <div className="modal">
          <header>
            <h2>Titulo da modal</h2>
            <button onClick={handleClick} className='close'>x</button>
          </header>
          <p>Conteudo da modal</p>

        </div>
      </div>)
      }

    </>
  )
}
