import React,{useState,useEffect} from "react";
import axiosConfig from '../Public Components/axiosConfig';
import {Bar} from 'react-chartjs-2'
import BarChart from './BarChart';

const Reports=()=>{

    const[bills,setBills] = useState([]);
    const[accounts,setAccounts] = useState([]);

    useEffect(()=>{

        axiosConfig.get("subadmin/bills").then((rsp)=>{            
        setAccounts(rsp.data.accounts);
        setBills(rsp.data.bills);
        debugger
        },(er)=>{
            debugger;
        })

    },[])


    return(
        <div>
            <BarChart />
            <center>
            <h1>Billing Report</h1>
            Total Account:{bills.total} <br></br>
            Paid: {bills.actives} <br></br>
            inacative: {bills.inactives} <br></br>
            banned: {bills.bans} <br></br>
            </center>

            <table width='100%  ' border='1'>
                <th>Username</th>
                <th>Status</th>
                <th>OP</th>

                {
                    accounts.map((ac)=>
                    <tr>
                        <td>{ac.username}</td>
                        <td>{ac.status}</td>
                        <td><button>CHECK</button></td>
                    </tr>
                    )
                }
            </table>
        </div>
    )
}

export default Reports;