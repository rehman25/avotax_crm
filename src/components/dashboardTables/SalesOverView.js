import React from 'react'
import './assets/css/SalesOverView.css'
import SalesOverViewChart from './charts/SalesOverViewChart'

const SalesOverView = () => {
    return (

        <div className='SOVParentContainer'>
            <div className='SOVTop'>
                <span>
                    <p className='Head'>Sale Over View</p>
                </span>
                <span>
                   <ul className='SOVselectList'>
                        <li>All Day</li>
                        <li>All Week</li>
                        <li>All Month</li>
                        <li>All Year</li>
                   </ul>
                </span>
            </div>
            <div className='SOvBottom'>
                <SalesOverViewChart />
            </div>

        </div>

    )
}

export default SalesOverView