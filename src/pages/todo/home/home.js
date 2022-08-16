import { Link } from 'react-router-dom'
import { client } from '../../../service/client'
import { useEffect, useState } from 'react'
const List = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    client.get('http://localhost:9000/movie')
      .then(response => {
        setItems(response.data)
      })
  }, [])

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Link to={`/movie/${item.id}`}> {item.nome}
          </Link>
        </li>)
      )}
    </ul>
  )
}
export const Home = () => {
  return (
    <>
      <h1>Pagina Home</h1>
      <List />
    </>
  )
}
