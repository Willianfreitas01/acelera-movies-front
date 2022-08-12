import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'
import { Login } from './pages/todo/login/login'
import { Home } from './pages/todo/home/home'
import { Movie } from './pages/todo/movie/movie'
import { Modal } from './components/modal'
import reportWebVitals from './reportWebVitals'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/modal" element={<Modal />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}
reportWebVitals()
