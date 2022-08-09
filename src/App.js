import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToDo } from './pages/todo/todo-page'
import './app.css'
import { useState } from 'react'

export const App = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleChangeNome = (event) => {
    console.log(event.target.value)
    setNome(event.target.value)
  }
  const handleChangeEmail = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  const handleChangeSenha = (event) => {
    console.log(event.target.value)
    setSenha(event.target.value)
  }
  const handleClick = () => {
    alert(`${nome}, ${email}, ${senha}`)
  }
  return (
    <div className="container">
      <div>
        <button
          onClick={handleClick}>
          click!
        </button>
      </div>
      <div className='container'>
        <input
          type="text"
          onChange={handleChangeNome} placeholder="Nome:" />
        <input
          type="email"
          onChange={handleChangeEmail} placeholder="Email:" />
        <input
          type="password"
          onChange={handleChangeSenha} placeholder="Senha:" />
      </div >
      <p>{nome} - {email} - {senha}</p>
    </div >
  )
}
