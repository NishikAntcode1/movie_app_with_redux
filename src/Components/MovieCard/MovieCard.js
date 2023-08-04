import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movieData }) => {
  return (
    <div className="flex flex-col justify-between max-w-xs max-h-xs w-60 rounded-lg shadow bg-gray-700 border-gray-700 hover:scale-110 ease-in-out duration-300 mb-6">
        <Link to={`/movie/${movieData.imdbID}`}>
            <img className="rounded-t-lg w-full" src={movieData?.Poster} alt="" />
        </Link>
        <div className="p-5 ">
            <Link to="#">
                <h5 className=" text-xl font-bold tracking-tight text-white">{movieData?.Title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-200">{movieData?.Year}</p>
            <div className="items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600">
                {/* {movieData?.Type} */}
                Download
            </div>
        </div>
    </div>

  )
}

export default MovieCard
