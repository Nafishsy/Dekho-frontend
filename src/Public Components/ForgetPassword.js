import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
import axiosConfig from  './axiosConfig';
import { Link } from "react-router-dom";


const ForgetPassword=()=>{

    const [email,setEmail] = useState("");
    const [otp,setOTP] = useState("");
    const [errs,setErrs] = useState({});
    const [flag,setFlag] = useState(false);

    const handleForgetPass=(event)=>{
        event.preventDefault();
        debugger;
        var data ={email:email}
        axiosConfig.post("forgetpass",data).
        then((succ)=>{
            
            alert("Mail sent to: "+succ.data.email)
            setFlag(true);

            debugger
        },(erros)=>{
            setErrs(erros.response.data);
            console.log(errs);
            debugger;
        })

    }

    const handleOTP=(event)=>{
        event.preventDefault();
        debugger;
        var data ={otp:otp}
        axiosConfig.post("otp",data).
        then((succ)=>{
            
            console.log(succ)
            setFlag(true);

            debugger
        },(erros)=>{
            setErrs(erros.response.data);
            console.log(errs);
            debugger;
        })

    }

    if (flag) {
        return(
            <div>
                <form onSubmit={handleOTP}>
    
                OTP: <input onChange={(e)=>{setOTP(e.target.value)}} type="text" name="OTP" value={otp}/> <br/>
                        <span>{errs.otp? errs.otp[0]:''}</span><br/>
                        <input type="submit" value="Check OTP"/>

                </form>
            </div>
        )
    } else {
        return(
            <div>
    
    
                <form onSubmit={handleForgetPass}>
    
                 Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/>
                        <span>{errs.email? errs.email[0]:''}</span><br/>
                        <input type="submit" value="Send Verification"/>
    
                </form>
    
                
    
            </div>
        )
    }
    
}

export default ForgetPassword;