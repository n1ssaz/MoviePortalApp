import { useState } from 'react'
import SearchAppBar from '../components/AppBar'
import MovieGrid from '../components/MovieGrid'
import Carousel from '../components/Carousel'
import { Box } from '@mui/system'
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite, reset } from '../reducers/dataSlice'
import database from "../../db.json"

function Favourite() {
  // const dispatch=useDispatch()
  // dispatch(reset())
  const favourites = useSelector((state) => state.data.favourites)
  console.log(favourites)

  const movies = database.movies.filter(item => {
    return favourites.includes(item.id)
  })
  return (
    <div className="App">
      <MovieGrid movies={movies}></MovieGrid>
    </div>
  )
}

export default Favourite
