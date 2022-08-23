import React,{useState,useEffect} from "react";
import axiosConfig from '../Public Components/axiosConfig';
import '../Css_for_chat/msgBox.css';

const ChatSys=()=>{

    const [message,setMessage] = useState("");
    
    const send=()=>{
        //pathabe
        const data={text:message};

        axiosConfig.post("subadmin/sendtext",data).
        then((succ)=>{
            debugger
        },(erros)=>{
            debugger
        })

    }
    return(
        
        <div className="Chat">
            
            <div class="message-box">
                <div class='bck'>
                <p>Message Here</p>
                </div>    
            </div>
            
            <div class="sender-box">
                <div class='sender-bck'>
                <p>Message Here</p>
                </div>    
            </div>
            
            <div class="textbox">           
            <textarea onChange={(e)=>{setMessage(e.target.value)}} resize='none' ></textarea>
            <button onClick={(e) => { send(e.target.value) }}>Send</button>
            </div>
             

        </div>

    )
}

export default ChatSys;