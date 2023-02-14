import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import database from "../../db.json";
import { Box } from "@mui/system";


function Carousel(){
  console.log(database.movies)
  const movies=database.movies
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  
return(
  <Box sx={{marginTop:10}}>
  <Slider sx={{width:"60%"}}{...settings}>
    
     {movies.slice(0,10).map(item=>{
      return <CarouselItem key={item.id} props={item}/>



     })}
    </Slider>
    </Box>
)
}
export default Carousel;