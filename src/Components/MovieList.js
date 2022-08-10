import React,{useState,useEffect} from "react";
import axios from 'axios';
import axiosConfig from './axiosConfig';
import { Link } from "react-router-dom";

const MovieList=()=>{
    const[movies,setMovies] = useState([]);

    useEffect(()=>{
        axiosConfig.get("movie/list").then((rsp)=>{
        setMovies(rsp.data);
        },(er)=>{

        })
    },[]);


    const Delete=(id)=>{        
        axios.get("http://localhost:8000/api/movie/delete/"+id).
        then((succ)=>{
            //setMsg(succ.data.msg);
            debugger;
            
            window.location.href="/moviemanage";
        },(err)=>{
            debugger;
        })
    }

    const loadData=()=>{
        axiosConfig.get("movie/list").then((rsp)=>{
            setMovies(rsp.data);
        },(er)=>{

        })
    }

    return(
        <div>
            <table border='1' width='100%'>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Description</th>
                        <th>Banner</th>
                        <th>Video</th>
                        <th>Operation</th>                        
                    
                {
                    movies.map((movie)=>
                    
                    <tr> 
                        

                        <td key={movie.id}> {movie.name}</td>
                        <td> {movie.genre}</td>
                        <td> {movie.description}</td>
                        <td> <img src={'../../../Project/storage/banners/'+movie.banner} width="350" height="350" alt={movie.name}/></td>
                        <td> <center><video controls src="{{asset('movies')}}/{{$movie->movie}}" width="350" height="350"></video></center></td>
                        <td> 
                            <button><Link to={`/movie/edit/${movie.id}`} >EDIT </Link></button> 
                            <button onClick={(e)=>{Delete(movie.id)}}>DELETE</button> 

                        </td>
                    </tr> 
                    )
                }
            </table>
        </div>
    )
}

export default MovieList;