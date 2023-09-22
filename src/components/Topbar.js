import React from 'react'
import barIco from '../assets/images/bar.avi'
import {Link} from "react-router-dom"
import { BsChevronRight } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import  user_img from '../components/assets/images/user.avi'
import { LuFilter } from 'react-icons/lu'

import './assets/css/topbar.css'

function Topbar(props) {
  return (
    <>
    <div className='topBar'>

        <div className="leftSide">
            <img src={barIco} alt="" onClick={props.hideShowMenuClick}/>

            <div className='pageHead'>
                <h5>Team management</h5>
                <div className="bread-crum">
                    <Link>Home <BsChevronRight/></Link>
                    <Link>Team management</Link>
                </div>
            </div>

        </div>

        <div className="rightSide">
            <BsSearch />
            <BsBell />
            <img src={user_img} alt="" />
        </div>
    </div>
          <div className='InnerTopbar row'>
              <div className="col-6"></div>
              <div className="col-6 innerRightSide">
                  <button className='filterBtn'><LuFilter />Filter</button>
                  <button>Create Job</button>
              </div>
          </div>
    </>
  )
}

export default Topbar