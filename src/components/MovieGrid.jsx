import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import GridItem from './GridItem';
import database from "../../db.json"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MovieGrid(props) {
  const movies = props.movies

  return (
    <Box >
      <Grid sx={{marginTop:12, display: "flex",  justifyContent:'space-around' ,marginLeft:20,marginRight:20,}} container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 20 }}>
        {movies.slice(0,24).map((item =>{
          return(<Grid xs={2} sm={4} md={4} key={item.id} >
            <GridItem item={item}/>
          </Grid>)
          
        }
          
        ))}
      </Grid>
    </Box>
    
  );
}