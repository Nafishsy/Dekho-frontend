import React,{useState,useEffect} from "react";
import axios from 'axios';
import axiosConfig from './axiosConfig';
import MovieList from "./MovieList";


const MovieMange=()=>{


    return(
        <div>
            <MovieList/>
        </div>
    )
}

export default MovieMange;