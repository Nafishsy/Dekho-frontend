import React,{useState,useEffect} from "react";
import axios from 'axios';
import axiosConfig from '../Public Components/axiosConfig';
import CoustomerMovieList from "./CoustomerMovieList";
import Container from "../components/Container";
import Nav from "../components/Nav";


const CustoMerComponents=()=>{


    return(
        <div
      style={{
        background: '#E7EBF0',
        overflow: 'hidden',
      }}
    >
      <Container />
    </div>
    )
}

export default CustoMerComponents;