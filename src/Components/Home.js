import React, { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import axiosConfig from './axiosConfig';
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import '../CSS/slides.css';

const Home=()=>{

    const[movies,setMovies] = useState([]);
    const[images,setImages] = useState('');
    useEffect(()=>{
        axiosConfig.get("movie/list").then((rsp)=>{      
        setMovies(rsp.data);
        },(er)=>{

        })
    },[]);

   /* const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
*/
    return(
        <Slide>

                {
                    movies.map((movie)=>
                    <div className="each-slide-effect" key={movie.id}>
                        <img src={`http://localhost:8000/banners/${movie.banner}`} width='50%' height='1000px' alt={movie.name} />                       
                    </div>
                    
                    )
                }
        </Slide>
    )
}

export default Home;