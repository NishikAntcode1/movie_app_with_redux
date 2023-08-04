import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from '../../Common/apis/movieApi'
import { APIKey } from '../../Common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const searchContext = "Destination"
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${searchContext}&type=movie`)
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async () => {
    const searchContext = "Friends"
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${searchContext}&type=series`)
    return response.data;
})

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk('movies/fetchAsyncMoviesOrShowsDetails', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data;
})

const initialState = {
    movies : {},
    shows : {},
    slectMovieOrShow : {}
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        addMovies : ( state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow : ( state ) => {
            state.slectMovieOrShow = {}
        }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled] : (state, { payload }) => {
            console.log("sucessful");
            return {...state, movies : payload};
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled] : (state, { payload }) => {
            console.log("sucessful");
            return {...state, shows : payload};
        },
        [fetchAsyncMoviesOrShowsDetail.fulfilled] : (state, { payload }) => {
            console.log("sucessful");
            return {...state, slectMovieOrShow : payload};
        },
    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getMovieOrShowDetails = (state) => state.movies.slectMovieOrShow


export default movieSlice.reducer;