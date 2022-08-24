
import React,{useState,useEffect} from "react";
import axiosConfig from '../Public Components/axiosConfig';


const CoustomerMovieList=()=>{
    const [search, setSearch] = useState('');
    const [movieList, setmovieList] = useState([]);


    useEffect(()=>{
        alert(localStorage.getItem("username"));
        axiosConfig.get("home/movie/list").then((rsp)=>{ 
            setmovieList(rsp.data);
        },(er)=>{
            alert("No Data")
        })
       console.log(search);

    },[]);


    const searched = (anything) => {
        // event.preventDefault();
        console.log(anything);
        setSearch(anything);
        axiosConfig.post("home/movie/list/search", { search: anything })
            .then((rsp) => {
                setmovieList(rsp.data);
                
            })
            .catch((err) => {
                alert("No Data")
            });
    }
     


    return(
        <>
        <input type="text" name="search" onChange={(e) => { searched(e.target.value.trim()) }} value={search} />
        <div className="row">         
       {                   
       movieList.map((movie)=>{
        return(
            <div className="col-sm-3">
            <div className="card">
            <img src={`http://localhost:8000/banners/${movie.banner}`} width="350" height="350" alt={movie.name} />
            <div className="card-body">
              <h3 className="card-title">{movie.name}</h3>
              <p className="card-text">{movie.description}</p>
            </div>
            </div>
            </div>
        )}
        
     ) }  
      
    
    </div>  
    
        </>
                    
    


    )
}

export default CoustomerMovieList;