import React,{useState,useEffect} from "react";
import axios from 'axios';
import axiosConfig from './axiosConfig';

const Reports=()=>{

    useEffect(()=>{

        axios.get("http://localhost:8000/api/subadmin/bills").then((rsp)=>{
            debugger;

        },(er)=>{

        })

    },[])


    return(
        <div>

            
        </div>
    )
}

export default Reports;