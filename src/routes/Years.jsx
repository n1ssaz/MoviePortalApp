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

function Years(){
const {year}=useParams()
const years = year.split("-")
console.log(years)
const between = (x, min, max) => {
  return x >= min && x <= max;
}
let movies;
if(years.length>=2){
   movies=database.movies.filter(item =>{
    // console.log()
    // console.log(between(item.year,parseInt(years[0]),parseInt(years[1]))))
    if(between(item.year,parseInt(years[0]),parseInt(years[1]))){
        return(true)
    }
    return(false)
  })

}
else{
   movies=database.movies.filter(item =>{
    if(item.year == parseInt(years)){
        return(true)
    }
    return(false)
  })
}

console.log(movies)

  return (
    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:100}}>
<MovieGrid movies={movies}></MovieGrid>

    </div>
  )
}

export default Years