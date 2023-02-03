import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CarouselC from 'react-material-ui-carousel'
import Example from './components/Carousel'
import { Box } from '@mui/system'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Box  display="Flex"
      justifyContent='center'
      alignItems="center"
      minHeight="100vh">

    <Example></Example>
           </Box>
    
    </div>
  )
}

export default App
