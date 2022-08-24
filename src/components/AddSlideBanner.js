import React,{useState,useEffect} from "react";
import axiosConfig from '../Public Components/axiosConfig';


const AddSlideBanner=()=>{


    const [name,setName] = useState("");
   
    
    const [banner,setBanner] = useState(null);
    

    const [errs,setErrs] = useState({});
    const [msg,setMsg] = useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        var data = new FormData();

        data.append("name",name);
        data.append("banner",banner,name);
        console.log(data);
        debugger
        axiosConfig.post("banner/uplode",data).
        then((succ)=>{
            //setMsg(succ.data.msg);
            debugger
            window.location.href="/moviemanage";
        },(err)=>{
            setErrs(err.response.data);
            console.log(err);
            
        })
    }

    return (
        <div>

        <form onSubmit={handleSubmit}>
            <h1>{msg}</h1>
            Name<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/><span>{errs.name? errs.name[0]:''}</span><br/>
            
            Banner: <input type="file" onChange={(e)=>{setBanner(e.target.files[0])}} name="banner"></input> <span>{errs.banner? errs.banner[0]:''}</span><br/>
            <input type="submit" value="Upload"/> 
        </form>

        
        </div>
    )
}

export default AddSlideBanner;