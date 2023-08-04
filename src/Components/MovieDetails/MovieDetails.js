import './movieDetails.css'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMoviesOrShowsDetail, getMovieOrShowDetails, removeSelectedMovieOrShow } from '../../Features/Movies/movieSlice';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrShowDetails)

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetail(id))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, id])
  
  return (
    <>
  <div className="movie-card">
    {
      Object.keys(data).lenght === 0? ( <div>Loading....</div>) : (
        <>
            <div className="container">
      <Link to="#">
        <img
          src={data.Poster}
          alt="cover"
          className="cover w-56 h-72 rounded-sm"
        />
      </Link>
      <div className="hero">
        <div className="details">
          <div className="title1">
            {data.Title} 
          </div>
          <fieldset className="rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
            <input
              type="radio"
              id="star4half"
              name="rating"
              defaultValue="4 and a half"
            />
            <label
              className="half"
              htmlFor="star4half"
              title="Pretty good - 4.5 stars"
            />
            <input
              type="radio"
              id="star4"
              name="rating"
              defaultValue={4}
              defaultChecked=""
            />
            <label
              className="full"
              htmlFor="star4"
              title="Pretty good - 4 stars"
            />
            <input
              type="radio"
              id="star3half"
              name="rating"
              defaultValue="3 and a half"
            />
            <label
              className="half"
              htmlFor="star3half"
              title="Meh - 3.5 stars"
            />
            <input type="radio" id="star3" name="rating" defaultValue={3} />
            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
            <input
              type="radio"
              id="star2half"
              name="rating"
              defaultValue="2 and a half"
            />
            <label
              className="half"
              htmlFor="star2half"
              title="Kinda bad - 2.5 stars"
            />
            <input type="radio" id="star2" name="rating" defaultValue={2} />
            <label
              className="full"
              htmlFor="star2"
              title="Kinda bad - 2 stars"
            />
            <input
              type="radio"
              id="star1half"
              name="rating"
              defaultValue="1 and a half"
            />
            <label
              className="half"
              htmlFor="star1half"
              title="Meh - 1.5 stars"
            />
            <input type="radio" id="star1" name="rating" defaultValue={1} />
            <label
              className="full"
              htmlFor="star1"
              title="Sucks big time - 1 star"
            />
            <input
              type="radio"
              id="starhalf"
              name="rating"
              defaultValue="half"
            />
            <label
              className="half"
              htmlFor="starhalf"
              title="Sucks big time - 0.5 stars"
            />
          </fieldset>
          <span className='rating text-white'>{data.imdbRating}</span>
          <span className="likes">109 likes</span>
        </div>{" "}
        {/* end details */}
      </div>{" "}
      {/* end hero */}
      <div className="description">
        <div className="column1">
          {
            data?.Genre?.split(', ')
            .map((value) => (
              <span className="tag">{value}</span>
            ))
          }
          
        </div>{" "}
        {/* end column1 */}
        <div className="column2">
          <div className='flex flex-row justify-start gap-4'>
            <h3 className='text-black text-sm font-mono my-2'>({data.Year})</h3>
            <h3 className='text-black text-sm font-mono my-2'>{data.Rated} Rated</h3>
          </div>
          <div className='flex flex-row justify-start'>
            <h4 className='font-semibold text-black font-mono'>Director : </h4><span className='mx-2 text-gray-800'>{data.Director}</span>
          </div>
          <div className='flex flex-row justify-start'>
            <h4 className='font-semibold text-black font-mono'>Writer : </h4><span className='mx-2 text-gray-800'>{data.Writer}</span>
          </div>
          <div className='flex flex-row justify-start'>
            <h4 className='font-semibold text-black font-mono'>Actors : </h4><span className='mx-2 text-gray-800'>{data.Actors}</span>
          </div>
          <div className='flex flex-row justify-start'>
            <h4 className='font-semibold text-black font-mono'>Runtime : </h4><span className='mx-2 text-gray-800'>{data.Runtime}</span>
          </div>
          <div className='flex flex-row justify-start'>
            <h4 className='font-semibold text-black font-mono'>Box Office Earnings : </h4><span className='mx-2 text-gray-800'>{data.BoxOffice}</span>
          </div>
          <p className='text-sm font-serif'>{data.Plot}</p>
        </div>{" "}
        {/* end column2 */}
      </div>{" "}
      {/* end description */}
    </div>{" "}
    {/* end container */}
        </>
      )
    }
    
  </div>{" "}
  {/* end movie-card */}
</>

  )
}

export default MovieDetails
