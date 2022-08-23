import { useEffect, useState } from "react";
import axiosConfig from  '../Public Components/axiosConfig.js';
import '../CSS/table.css';
const Profile=()=>{


    const [user,setUser] = useState({});
    const [profilepic,setProfilepic] = useState(null);
    const [errs,setErrs] = useState({});
    useEffect(()=>{

    var data = {username:localStorage.getItem("username")}
    axiosConfig.post("userinfo",data).then
    ((rsp)=>{
        setUser(rsp.data)
        debugger;
    },(err)=>{
        debugger;
    });
    },[user])


    const handleSubmit=(event)=>{
        event.preventDefault();
        
        var data = new FormData();

        data.append("username",user.username);
        data.append("profilepic",profilepic,localStorage.getItem("username"));
        
        console.log(data);
        debugger
        axiosConfig.post("profilepic/upload",data).
        then((succ)=>{
            //setMsg(succ.data.msg);
            debugger
            //window.location.href="/";
        },(err)=>{
            setErrs(err.response.data);
            console.log(err);
            debugger
        })
    }

    
    return(
        <div>
            <br/>
            <b>
                <table border='1px' width='100%' height='500px'>

                    <tr>
                        <td>Username:</td>
                        <td>{localStorage.getItem("username")}</td>

                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>

                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>{user.password}</td>

                    </tr>
                    <tr>
                        <td>Role:</td>
                        <td>{user.role}</td>

                    </tr>
                    <tr>
                        <td>Profile Pic:</td>
                        <td>

                            <img height='250px' width='25%'src={`http://localhost:8000/profilepics/${user.profilepic}`} ></img>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <input type="file" onChange={(e)=>{setProfilepic(e.target.files[0])}} name="profilepic"></input> 
                                <span>{errs.profilepic? errs.profilepic[0]:''} </span><br/>
                                <input type="submit" value="Upload"/> 
                            
                            </form>
                        </td>

                    </tr>
                </table>

            </b>
            
            

            
        </div>
    )
}
export default Profile