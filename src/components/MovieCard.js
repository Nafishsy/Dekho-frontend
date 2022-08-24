import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../Public Components/axiosConfig';
import WatchMovie from './WatchMovie';


const MovieCard = ({movie}) => {

  const name=localStorage.getItem("username")
  const navigate=useNavigate()

  const AdList=(id)=>{    
    console.log(name,id);
    if(name){
      alert("Add movie into My List")
    }else{
      alert("login PLease")
    }
    
    
   }
   const Watch=(id)=>{  
    if(name){
      navigate(`/watch/movie/${id}`)
    }else{
      alert("login PLease")
    }
      

   }

   
   

  console.log(movie)
  return (
    <>
      <Card>
        <CardMedia
          component='img'
          height={250}
          src={`http://localhost:8000/banners/${movie.banner}`}
        />

        <CardContent>
          <Stack spacing={1}>
            <Typography fontSize='1.2rem' fontWeight={600}>
              {movie.name}
            </Typography>
            <Stack direction='row' alignItems='center' spacing={1}>
              <Rating value={Number(4)} readOnly precision={0.5} size='small' />
              <Typography color='text.secondary'>(4.4)</Typography>
            </Stack>
          </Stack>
          <Stack spacing={1} mt={2}>
            <Button variant='outlined' onClick={(e)=>{AdList(movie.id)}}  endIcon={<FavoriteIcon />}>
              Add list
            </Button>
            <Button variant='contained'onClick={(e)=>{Watch(movie.id)}} fullWidth endIcon={<VisibilityIcon />}>
              Watch now
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
