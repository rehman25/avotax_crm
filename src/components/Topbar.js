import React from 'react'
import barIco from '../assets/images/bar.avi'
import { Link } from "react-router-dom"
import { BsChevronRight } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import user_img from '../components/assets/images/user.avi'

import './assets/css/topbar.css'

function Topbar(props) {
    return (
        <>
            <div className='topBar'>

                <div className="leftSide">
                    <img src={barIco} alt="" onClick={props.hideShowMenuClick} />

                    <div className='pageHead'>
                        <h5>{props?.two}</h5>
                        <div className="bread-crum">
                            <Link>{props?.one}  <BsChevronRight /></Link>
                            <Link>{props?.two}</Link>
                        </div>
                    </div>

                </div>

                <div className="rightSide">
                    <BsSearch />
                    <BsBell />
                    <img src={user_img} alt="" />
                </div>
            </div>
           
        </>
    )
}

export default Topbar