import { useState } from 'react'
import SearchAppBar from '../components/AppBar'
import MovieGrid from '../components/MovieGrid'
import Carousel from '../components/Carousel'
import { Box } from '@mui/system'
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite } from '../reducers/dataSlice'
import database from "../../db.json"


function WatchLater() {

  const WatchLaterList = useSelector((state) => state.data.watchLater)

  const movies=database.movies.filter(item =>{
    return WatchLaterList.includes(item.id)
  })
  return (
    <div>
<MovieGrid movies={movies}></MovieGrid>
    </div>
  )
}

export default WatchLater
