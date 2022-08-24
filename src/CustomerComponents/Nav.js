import React from "react";
import { Link } from "react-router-dom";
import axiosConfig from '../Public Components/axiosConfig';
const Nav=()=>{
    
    const LogOut=()=>{

        var data = {username:localStorage.getItem("username")}
        axiosConfig.post("logout",data).
        then((succ)=>{  
            
            alert(succ.data.msg)
            localStorage.clear();
            window.location.href="/customer/home";
            debugger
        },(erros)=>{
            debugger
        })
        
    }

    return(
        <div>
            <Link to="/customer/home">Home</Link> &nbsp;&nbsp;
            <Link >Movies</Link> &nbsp;&nbsp;
            <Link to="/customer/Bell">Bell</Link> &nbsp;&nbsp;
            {localStorage.getItem("username")&&<button><Link to="/report">My List</Link> &nbsp;&nbsp;</button> }
            {localStorage.getItem("username")==null && <Link to="/reportChart">Login</Link>}
            {localStorage.getItem("username") && <button onClick={(e)=>{LogOut()}} >Logout</button> }
                  
        </div>
    )
}

export default Nav;