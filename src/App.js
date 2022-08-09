import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'
import { Login } from './pages/todo/login/login'
import { Home } from './pages/todo/home/home'
import { Movie } from './pages/todo/movie/movie'
import reportWebVitals from './reportWebVitals'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/movie/:id" element={<Movie />} exact />
      </Routes>
    </BrowserRouter>
  )
}
reportWebVitals()
