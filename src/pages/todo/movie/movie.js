import { useParams } from 'react-router'

export const Movie = () => {
  const { id } = useParams()

  return (
    <>
      <h1>Pagina Movie</h1>
      <p>Você está no filme: {id}</p>
    </>
  )
}
