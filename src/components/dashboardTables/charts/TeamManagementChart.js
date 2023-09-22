import React from "react";
import {
    LineChart,
    Line,
} from "recharts";

const data = [
    {
        uv: 2000,

    },
    {
        uv: 3000,

    },
    {
        uv: 2000,
    
    },
    {
        uv: 2780,
    },
    {
        uv: 4800,
    },

];

export default function TeamManagementChart() {
    return (
        <div style={{height:"0px", display:"flex", alignItems:"center"}}>
        <LineChart
            width={50}
            height={50}
            data={data}
       
        >
            <Line  dataKey="uv" stroke="Red" />
        </LineChart>
        </div>
    );
}
