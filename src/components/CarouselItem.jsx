import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const a={
  "id": 1,
  "title": "Beetlejuice",
  "year": "1988",
  "runtime": "92",
  "genres": [
      "Comedy",
      "Fantasy"
  ],
  "director": "Tim Burton",
  "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
  "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
  "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
}

function CarouselItem(props) {
  const item = props.props
  if(item){
  return (
    <Card sx={{ maxWidth: 345,display: 'flex' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={item.posterUrl}
        alt=""
      />  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.genres.join(", ")}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
}

export default CarouselItem
