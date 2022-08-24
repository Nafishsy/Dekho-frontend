import React, { useEffect, useState } from 'react';
import { useParams, useRoutes } from 'react-router-dom';
import Nav from './Nav';
import axiosConfig from '../Public Components/axiosConfig';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function WatchMovie() {
    const {id}=useParams()
    const [movieList, setmovieList] = useState([]);
     
    useEffect(()=>{

        axiosConfig.get("watch/movie/"+id).then((rsp)=>{
            setmovieList(rsp.data);
            debugger

        },(er)=>{
            
        })
        console.log(movieList);

    },[])
    
    return (
        <div>
           <Nav/> 
           <Box sx={{
                width:'50%',
                mx:'auto',
                mt:4,
                boxShadow:3
           }}>
           <video controls src={`http://localhost:8000/movies/${movieList.movie}`} width="100%" height="100%" type="video/mp4" ></video>
           
           <Typography variant='h5'>{movieList.name}</Typography>
           <Typography >{movieList.description}</Typography>

           </Box>
           


        </div>
    );
}

export default WatchMovie;