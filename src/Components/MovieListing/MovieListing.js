import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../Features/Movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {

  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  let renderMovies, renderShows = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} movieData = {movie} />
    ))
  ) : (<div className = ""><h3 className='font-bold text-white'>{movies.error}</h3></div>)

  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} movieData = {show} />
    ))
  ) : (<div className = ""><h3 className='font-bold text-white'>{shows.error}</h3></div>)

  return (
    <div className='w-full h-full'>
      <div className=''>
        <h1 className='font-bold text-white text-4xl p-6 font-serif'>Movies</h1>
      </div>
      <div className='grid grid-cols-4 gap-4 justify-items-center lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2  m-4'>
        {renderMovies}
      </div>
      <div className=''>
        <h1 className='font-bold text-white text-4xl p-6 font-serif'>shows</h1>
      </div>
      <div className='grid grid-cols-4 gap-4 justify-items-center lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2  m-4'>
        {renderShows}
      </div>
    </div>
  )
}

export default MovieListing
