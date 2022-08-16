import { client } from '../../../service/client'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({ nome: '', id: '', director: '' })
  useEffect(() => {
    client.get(`http://localhost:9000/movie/${id}`)
      .then(response => {
        setMovie(response.data)
      })
  }, [])

  return (
    <>
      <h1>{movie.name}</h1>
      <p>Você está no filme: {movie.id}</p>
      <p>director: {movie.director}</p>
    </>
  )
}
