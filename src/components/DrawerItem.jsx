import { List, Box, ListItem, ListItemButton, ListItemText, Divider, Hidden} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import database from "../../db.json"

export default function DrawerItem(items){

const genres = database.genres
  const GenreItem=(props)=>{
    const item=props.item
    return (
      
  <List>
    {genres.map((item) => (
  
        <ListItem key={item}>

          <ListItemButton sx={{width:300}} onClick={() =>{
            navigate(`Genres/${item}`)
          }}>
      
            <ListItemText  primaryTypographyProps={{fontSize:20}}  primary={item} />
          </ListItemButton >
        </ListItem>
        ))}
        </List>
    )
  }

  const NavigationItem=(props)=>{
    const item=props.item

    return (
  
        <ListItem disablePadding>
          <ListItemButton sx={{width:300}} onClick={() =>{
            navigate(item.path)
          }}>
      
            <ListItemText  primaryTypographyProps={{fontSize:20}}  primary={item.title} />
          </ListItemButton >
        </ListItem>
     
    )
  }
const [genreOpen, setGenreOpen] = useState(false)
function toggleGenreOpen(){

  setGenreOpen(!genreOpen)}

 const navigate = useNavigate()
    return(
   <Box>    
      <List>
      <NavigationItem item={{title:"Favourite",path:"/favourites"}}/>
      <NavigationItem item={{title:"Watch Later",path:"/watchLater"}}/>
      <div onClick={toggleGenreOpen}>
      <NavigationItem item={{title:"Genres"}} />
     </div>
     
     
     
      {
        genreOpen? <GenreItem>
        </GenreItem>: null} 

      </List>
      <Divider />
    </Box>
  )};