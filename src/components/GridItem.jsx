import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavourite,toggleWatchLater} from '../reducers/dataSlice';
import { useSelector, useDispatch } from 'react-redux'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function GridItem(props) {
  const favourites = useSelector((state) => state.data.favourites)

  const WatchLater = useSelector((state)=> state.data.watchLater)

    const item =props.item
    const dispatch = useDispatch()


  return (
    <Card sx={{ maxWidth: 345 }}>
      
    
      <CardMedia
        component="img"
        height="194"
        image={item.posterUrl}
        alt=""
      />
      <CardContent>
      
      <Typography variant="body2" color="text.secondary">
         {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.genres.join(", ")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={()=>{dispatch(addFavourite(item.id))}} aria-label="add to favorites" >
          <FavoriteIcon sx={{  color: favourites.includes(item.id)? 'red' :""}}/>
        
        </IconButton>
        <IconButton onClick={()=>{dispatch(toggleWatchLater(item.id))}} aria-label="WatchLater" >
        <AccessTimeIcon sx={{  color: WatchLater.includes(item.id)? 'green' :""}}>

        </AccessTimeIcon>
      </IconButton>
      </CardActions>
    </Card>
  );
}