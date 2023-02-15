import { useState } from 'react'
import SearchAppBar from '../components/AppBar'
import MovieGrid from '../components/MovieGrid'
import Carousel from '../components/Carousel'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import database from "../../db.json"


function App() {
  const [count, setCount] = useState(0)
  const movies=database.movies
  
  return (
    <div className="App">
   <Box sx= {{}}>
    <Outlet></Outlet>
    <Carousel></Carousel>
  
   <MovieGrid movies={movies}></MovieGrid>
   </Box>
    </div>
  )
}

export default App
