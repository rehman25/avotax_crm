import React from 'react'
import './assets/css/annualrevenue.css'
import AnnualChart from './charts/AnnualChart'
import {AiOutlineCalendar} from 'react-icons/ai'

const AnnualRevenue = () => {
  return (
     
    <div className='ArParentContainer'>
        <div className='ArTop'>
            <span>
                  <p className='Head'>Annual Revenue</p>
                  <p>2.5% increase from last year. <b>Total 20k in 2023</b></p>
            </span>
            <span>
                <div className="form-control ArCalender">
            <span>Jan 2022 - Jan 2023 <AiOutlineCalendar className='ArIcon' /> </span>
                </div>
            </span>
        </div>
        <div className='ArBottom'>
              <AnnualChart />
        </div>

    </div>
     
  )
}

export default AnnualRevenue