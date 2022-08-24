import { Box, Paper } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const data = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    img: 'https://img.gurugamer.com/resize/1200x-/2021/02/23/dune-b2c7.jpg',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    img: 'https://wegotthiscovered.com/wp-content/uploads/2020/07/159492946620314633-11.jpeg',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    img: 'https://img1.looper.com/img/gallery/the-gerard-butler-disaster-movie-thats-killing-it-on-amazon-video/l-intro-1608658488.jpg',
  },
];
const Slider = () => {
  return (
    <Carousel
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      animation='slide'
      style={{
        marginTop: '10px',
      }}
    >
      {data.map((item) => (
        <Link to='/' key={item.id}>
          <Box
            mt={2}
            sx={{
              overflow: 'hidden',
              height: {
                md: '70vh',
              },
            }}
          >
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={item.img}
            ></img>
          </Box>
        </Link>
      ))}
    </Carousel>
  );
};

export default Slider;
