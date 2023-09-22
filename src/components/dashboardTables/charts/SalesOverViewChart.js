import React, { useState, useEffect } from 'react';
import '../assets/css/SalesOverView.css'
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const SalesOverViewChart = () => {
    const data = [
        {
            action: 'Jan',
            pv: 50000,
        },
        {
            action: 'Feb',
            pv: 35000,
        },
        {
            action: 'March',
            pv: 25000,
        },
        {
            action: 'April',
            pv: 15000,
        },
        {
            action: 'May',
            pv: 8500,
            
        },
        {
            action: 'June',
            pv: 8500,

        },
        {
            action: 'July',
            pv: 8500,

        },
        {
            action: 'Aug',
            pv: 8500,

        },
        {
            action: 'Sept',
            pv: 8500,

        },
        {
            action: 'Oct',
            pv: 8500,

        },
        {
            action: 'Nov',
            pv: 8500,

        },
        {
            action: 'Dec',
            pv: 8500,

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
       <div style={{}} className='ChartCont'>
           <Column {...config} />
       </div>
    )

};

export default SalesOverViewChart 
// ReactDOM.render(<DemoColumn />, document.getElementById('container'));
