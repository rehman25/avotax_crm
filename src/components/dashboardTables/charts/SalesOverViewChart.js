
import React, { useState, useEffect } from 'react';


import '../assets/css/SalesOverView.css'
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const SalesOverViewChart = () => {
    const data = [
        {
            action: 'Jan',
            pv: "0k",
        },
        {
            action: 'Feb',
            pv: "50k",
        },
        {
            action: 'March',
            pv: "100k",
        },
        {
            action: 'April',
            pv: "150k"
        },
        {
            action: 'May',
            pv: "200k",
            
        },
        {
            action: 'June',
            pv: "250k",

        },
        {
            action: 'July',
            pv: "300",

        },
        {
            action: 'Aug',
            pv: "250k",

        },
        {
            action: 'Sept',
            pv: "350k",

        },
        {
            action: 'Oct',
            pv: "350k",

        },
        {
            action: 'Nov',
            pv: "350k",

        },
        {
            action: 'Dec',
            pv: "350k",

        },
    ];
    const config = {
        data,
        xField: 'action',
        yField: 'pv',
        conversionTag: {},
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };
    return(
       <div className='ChartCont'>
           <Column {...config} />
       </div>
    )

};

export default SalesOverViewChart 
// ReactDOM.render(<DemoColumn />, document.getElementById('container'));
