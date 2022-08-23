import { Chart as ChartJS } from 'chart.js/auto'
import React from "react";
import { Bar,Pie} from 'react-chartjs-2'

const data ={
    labels: ["Red","Blue","ASDASDue","zxC","zxcz",],
    datasets: [
        {
            data: [13,123,123,1231,232],
            backgroundColor: [
                "red",
                "blue",
                "green",
                "grey",
                "orange",
            ]
        }
    ]
}
const BarChart = () =>{
    return(
        <div align='center' style={{width: '1000px', height: '10px'}}>
            <center>
            
            <Pie data={data}/> 
            </center>

        </div>
            

    )
}

export default BarChart