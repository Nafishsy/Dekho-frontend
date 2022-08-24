import React, { useEffect, useState } from 'react';
import axiosConfig from '../Public Components/axiosConfig';

const Bell = () => {
    const[movies,setMovies] = useState([]);
    
    
    useEffect(()=>{
        axiosConfig.get("home/movie/list").then((rsp)=>{       
        setMovies(rsp.data);
        
        },(er)=>{
        alert("no data")
        })
        console.log(movies);
    },[]);
    
    return (
      
        <>
        
        
        <div>
            <table border='1' width='30%'>
                        <th>Name</th>
                        <th>Uplode Time</th>
                                               
                    
                {
                    movies.map((movie)=>
                    
                    <tr>                        

                        <td key={movie.id}> {movie.name}</td>
                        <td> {movie.updated_at}</td>
                       
                       
                    </tr> 
                    )
                }
            </table>
        </div>



        </>
    );
};

export default Bell;