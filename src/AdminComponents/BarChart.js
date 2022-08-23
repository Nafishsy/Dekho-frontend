import React from "react";
import{Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import Chart from 'react-apexcharts';

const BarChart = () => {

    return (
            <div>

                <Chart
                type="bar"
                width={1380}
                height={700}

                series={[
                    {
                        name:"",
                        data:[31,8]
                    }
                ]}

                options={{
                    title:{
                        text:"Customers VS SubAdmins",
                        style:{fontSize:30}
                    },

                    colors:['#2A0944'],

                    theme:{mode:'light'},

                    xaxis:{
                        categories:["Customers", "SubAdmins"],
                        title:{
                            text:"User types",
                            style:{fontSize:25, color:"#2A0944"}
                        },
                        labels:{
                            style:{fontSize:20, color:"#2A0944"}
                        }
                    },

                    yaxis:{
                        title:{
                            text:"Total number of users",
                            style:{fontSize:25, color:"#2A0944"}
                        },
                        labels:{
                            style:{fontSize:20, color:"#2A0944"}
                        }
                    }
                }}
                >

                </Chart>
                
            </div>
    )
}
export default BarChart