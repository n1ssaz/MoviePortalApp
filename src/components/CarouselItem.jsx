import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function CarouselItem() {
  return (
    <Card sx={{ maxWidth: 345,display: 'flex' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      romantic
        </Typography>
        <Typography variant="body2" color="text.secondary">
 do fall in love
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CarouselItem
