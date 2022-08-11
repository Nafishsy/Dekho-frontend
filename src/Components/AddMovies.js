import React,{useState,useEffect} from "react";
import axios from 'axios';
import axiosConfig from './axiosConfig';


const AddMovie=()=>{


    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [genre,setGenre] = useState("");
    const [banner,setBanner] = useState(null);
    const [movie,setMovie] = useState(null);

    const [errs,setErrs] = useState({});
    const [msg,setMsg] = useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        var data = new FormData();
        data.append("banner",banner,banner.name);
        data.append("movie",movie,movie.name);        
        data.append("name",name);
        data.append("description",description);
        data.append("genre",genre);
        
        axios.post("http://localhost:8000/api/movie/upload",data).
        then((succ)=>{
            //setMsg(succ.data.msg);
            debugger;
            window.location.href="/moviemanage";
        },(err)=>{
            debugger;
            setErrs(err.response.data);
        })
    }

    return (
        <div>

        <form onSubmit={handleSubmit}>
            <h1>{msg}</h1>
            Movie Name<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/><span>{errs.name? errs.name[0]:''}</span><br/>
            Description: <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text"/><br/>
            Genre <br/>
                        <input type="radio" name="genre" value='Action' onClick={(e)=>{setGenre(e.target.value)}}/>Action<br/>
                        <input type="radio" name="genre" value='Thriller'onClick={(e)=>{setGenre(e.target.value)}}/>Thriller<br/>
                        <input type="radio" name="genre" value='Comedy'onClick={(e)=>{setGenre(e.target.value)}}/>Comedy<br/>
                        <input type="radio" name="genre" value='Adventure'onClick={(e)=>{setGenre(e.target.value)}}/>Adventure<br/>
                        <input type="radio" name="genre" value='Documentary'onClick={(e)=>{setGenre(e.target.value)}}/>Documentary<br/>


            Movie File: <input type="file" onChange={(e)=>{setMovie(e.target.files[0])}} name="movie"></input> <br/>
            Banner: <input type="file" onChange={(e)=>{setBanner(e.target.files[0])}} name="banner"></input> <br/>
            <input type="submit" value="Upload"/> 
        </form>

        
        </div>
    )
}

export default AddMovie;
