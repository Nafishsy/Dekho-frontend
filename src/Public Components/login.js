import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
import axiosConfig from  './axiosConfig';


const Login=()=>{

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errs,setErrs] = useState("");

    const handleLogin=(event)=>{
        event.preventDefault();
        const data={username:username,password:password};
        // debugger;
        axiosConfig.post("login",data).
        then((succ)=>{
            
            var token=succ.data.token;
            var user =succ.data.user;           
            //var message=succ.data.msg; off kore rakhsi alert marbo pore

            localStorage.setItem("_authToken",token);
            debugger
            console.log(user);
            console.log(token);
            debugger;

            alert("Hoise")
            
            if(user.role==="Admin"){
                window.location.href="/addmovies";
            }
            else if (user.role=="SubAdmin"){
                window.location.href="/moviemanage";
            }
            else if (user.role=="Customer"){
                window.location.href="/home";
            }

        },(erros)=>{
            setErrs(erros.response.data);
            console.log(errs);
            debugger;
        })
        
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                    Email: <input onChange={(e)=>{setUsername(e.target.value)}} size={30} type="text" name="username" value={username}/> <br/>
                    <span>{errs.username? errs.username[0]:''}</span><br/>
                    Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/>
                    <span>{errs.password? errs.password[0]:''}</span><br/>
                    <input type="submit" value="Login"/>
            </form>
        </div>
    )

}

export default Login;