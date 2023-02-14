import { useState } from 'react'
import SearchAppBar from '../components/AppBar'
import MovieGrid from '../components/MovieGrid'
import Carousel from '../components/Carousel'
import { Box } from '@mui/system'
import { useSelector, useDispatch } from 'react-redux'
import { addFavourite } from '../reducers/dataSlice'
import database from "../../db.json"
import { useParams } from 'react-router-dom'
import GridItem from '../components/GridItem'

function Movie(){
const {movie}=useParams()
  const currentMovie=database.movies.filter(item =>{
    if(item.id == movie){
        return(true)
    }
    return(false)
  })

  return (
    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:100}}>
<GridItem item={currentMovie[0]}></GridItem>
    </div>
  )
}

export default Movie