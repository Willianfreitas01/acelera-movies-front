import { Link } from 'react-router-dom'

const List = () => {
  const items = [
    { id: 1, nome: 'filme 1' },
    { id: 2, nome: 'filme2' },
    { id: 3, nome: 'filme3' }
  ]

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
