import {useParams} from 'react-router-dom';
import {useState,useEffect}  from 'react';
import axios from 'axios';

const MovieDelete=()=>{
    const{id} = useParams();
    useEffect(()=>{
        //axios.get("/student/detials/"+id)
    },[]);
    return(
        <div>
            Movie Id : {id}
        </div>
    )

}
export default MovieDelete;