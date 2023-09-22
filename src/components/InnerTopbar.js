import React from 'react'
import './assets/css/topbar.css'
import { LuFilter } from 'react-icons/lu'


function InnerTopbar() {
    return (
        <>
            <div className='InnerTopbar row'>
                <div className="col-lg-6 col-md-6 col-sm-6"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 innerRightSide">
                    <button><LuFilter />Filter</button>
                    <button className='CreateJobbtn'>Create Job</button>
                </div>
            </div>
        </>
    )
}

export default InnerTopbar
