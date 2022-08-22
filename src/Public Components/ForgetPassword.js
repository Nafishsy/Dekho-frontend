import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
import axiosConfig from  './axiosConfig';
import { Link } from "react-router-dom";


const ForgetPassword=()=>{

    const [email,setEmail] = useState("");
    const [errs,setErrs] = useState({});

    const handleForgetPass=(event)=>{
        event.preventDefault();
        axiosConfig.post("forgetpass",email).
        then((succ)=>{
            
            alert(succ.data.msg)
            window.location.href="/";
            debugger
        },(erros)=>{
            setErrs(erros.response.data);
            console.log(errs);
            debugger;
        })

    }

    return(
        <div>
            <form onSubmit={handleForgetPass}>

             Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/>
                    <span>{errs.email? errs.email[0]:''}</span><br/>
                    <input type="submit" value="Login"/>
                    
            </form>
        </div>
    )
}

export default ForgetPassword;