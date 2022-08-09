import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Login } from './pages/login/login'
import { Home } from './pages/todo/home/home'
import { Movie } from './pages/todo/movie/movie'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  </BrowserRouter>
)

reportWebVitals()
