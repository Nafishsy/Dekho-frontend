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

    const[flgSts,setFlgSts] = useState(false);

    const handleChange=()=>{

        // axiosConfig.get("subadmin/bills/changestatus").
        // then((rsp)=>{            
            
        //     debugger
        //     },(er)=>{

        //         debugger;
        //     })
    }

    return(
        <div>
            


                <table width='100%'>
                    <tr>
                        <td>
                    Total Account:{bills.actives+bills.inactives+bills.bans} <br/><br/>
                    Paid: {bills.actives} <br></br>
                    inacative: {bills.inactives} <br></br>
                    banned: {bills.bans} <br></br>
                        </td>
                        <td >
                        <BarChart />
                        </td>
                    </tr>
                </table>


            <table width='100%  ' border='1'>
                <th>Username</th>
                <th>Status</th>
                <th>OP</th>

                {
                    accounts.map((ac)=>
                    <tr>
                        <td key={ac.id}>{ac.username}</td>
                        <td>{ac.status}</td>
                        <td><button onClick={handleChange}>Change Status</button></td>
                    </tr>
                    )
                }
            </table>
        </div>
    )
}

export default Reports;