import { useState } from 'react'
import SearchAppBar from '../components/AppBar'
import MovieGrid from '../components/MovieGrid'
import Carousel from '../components/Carousel'
import { Box } from '@mui/system'
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite } from '../reducers/dataSlice'
import database from "../../db.json"
import { useParams } from 'react-router-dom'

function Genres(){
const {genre}=useParams()
console.log(genre)
  const movies=database.movies.filter(item =>{
    if(item.genres.includes(genre)){
        return(true)
    }
    return(false)
  })
  return (
    <div>
<MovieGrid movies={movies}></MovieGrid>

    </div>
  )
}

export default Genres