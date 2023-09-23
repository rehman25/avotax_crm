import React from 'react';
import { Pie } from '@ant-design/plots';

const WipChart = () => {
    const data = [
        {
            type: 'Wip',
            value: 27,
        },
        {
            type: 'Member',
            value: 25,
        },
        {
            type: 'Total',
            value: 18,
        },
        {
            type: 'Client',
            value: 15,
        },
  
    ];
    const config = {
        
        appendPadding: 5,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '',
            },
        },
    };
    return (
        <div style={{ width: "226px", height:"205px", padding:"22px" }}>
        <Pie {...config} />
    </div>
    )
};



// ReactDOM.render(<DemoPie />, document.getElementById('container'));

export default WipChart
