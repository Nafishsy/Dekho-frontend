import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  
} from '@mui/material';
import Slider from './Slider';
import MovieCard from './MovieCard';
import axiosConfig from '../Public Components/axiosConfig';
import Nav from './Nav';


const Container = () => {

  const[search,setSearch] = useState();
  const [movieList, setmovieList] = useState([]);
    
    
    useEffect(()=>{
        axiosConfig.get("home/movie/list").then((rsp)=>{       
          setmovieList(rsp.data);
        
        },(er)=>{
        alert("no data")
        })
        console.log(search);
    },[]);

    const searched = (anything) => {
      // event.preventDefault();
      console.log(anything);
      setSearch(anything);
      axiosConfig.post("home/movie/list/search", { search: anything })
          .then((rsp) => {
              setmovieList(rsp.data);
              
          })
          .catch((err) => {
              alert("No Data")
          });
  }
    


  return (
    <>
    <Nav/>
    <div className='d-flex justify-content-end pt-2 '> <span className='p-2'>Search:</span><input type="text" className='pl-5 rounded '  name="search" onChange={(e) => { searched(e.target.value.trim()) }} value={search} /></div>
   
        
    <Box mb={2}>
      <Typography>Movies</Typography>
      <Grid container spacing={2}>
        {movieList.map(movie =>(
          <Grid item xs={12} sm={6} md={2} key={movie.id}>
         <MovieCard movie={movie} />
         </Grid> 
        ))}
      </Grid>
    </Box>
    <Slider />
    </>
  );
};

export default Container;
