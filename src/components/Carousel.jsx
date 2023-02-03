import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Grid,
    Paper,
    Button,
} from '@mui/material';
function Item(props)
{
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Drama"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Drama
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ketu do te shifni filmat me damatic te momentit, nese doni te prini damaret thjesht,klikoni ketu.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}



const Example = () => {

    // const [settings, setSettings] = useState<SettingsT>(DefaultSettingsT);
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div style={{ marginTop: "50px", width:'20%', color: "#494949" ,paddingBottom:'200px'}}>
            <Carousel>
                {
                      
                        items.map( (item, i) => <Item key={i} item={item} /> )

                }
            </Carousel>
        </div>
    );
}



export default Example;