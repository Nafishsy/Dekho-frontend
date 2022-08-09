import React,{useState,useEffect} from "react";
import axios from 'axios';
const AddMovie=()=>{


    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [genre,setGenre] = useState("");

    const [errs,setErrs] = useState({});
    const [msg,setMsg] = useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={name:name,description:description,genre:genre};
        axios.post("http://localhost:8000/api/movie/upload",data).
        then((succ)=>{
            //setMsg(succ.data.msg);
            window.location.href="/list";
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
            Genre: <input value={genre} onChange={(e)=>{setGenre(e.target.value)}} type="text"/><span>{errs.cgpa? errs.cgpa[0]:''}</span><br/>

        <input type="radio" name="genre" value='Action'/>Action<br/>
        <input type="radio" name="genre" value='Thriller'/>Thriller<br/>
        <input type="radio" name="genre" value='Comedy'/>Comedy<br/>
        <input type="radio" name="genre" value='Adventure'/>Adventure<br/>
        <input type="radio" name="genre" value='Documentary'/>Documentary<br/>
        
            <input type="submit" value="Upload"/> 
        </form>

        
        </div>
    )

    /*
    Movie File: <input value={cgpa} onChange={(e)=>{setCgpa(e.target.value)}} type="text"/><span>{errs.cgpa? errs.cgpa[0]:''}</span><br/>
    Banner File: <input value={cgpa} onChange={(e)=>{setCgpa(e.target.value)}} type="text"/><span>{errs.cgpa? errs.cgpa[0]:''}</span><br/>
             */
}

export default AddMovie;
