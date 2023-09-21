import React from 'react'
import { Link } from "react-router-dom"
import { AiFillPieChart } from 'react-icons/ai';
import '../components/assets/css/sidebar.css'
import logo from '../components/assets/images/fullLogo.avi'
import logoIco from '../components/assets/images/logoIco.avi'
import {IoIosPeople} from 'react-icons/io'
import {BiErrorCircle} from 'react-icons/bi'
import { BsBagFill } from 'react-icons/bs'



export default function Sidebar(props) {
  return (
    <>
        <div className="mainSideBar" id={props.isMenuOpen ?  "openBar" : "closeBar"}>
            <div className="innerSideBar">
                <div className="positionBox">
                    <div className="sidebarScrollBox">
                        <div className="logoBox">
                              {props.isMenuOpen ? <img src={logo} alt="" /> : <img src={logoIco} alt="" className='toggleLogo' />}
                        </div>
                        <div className="">
                              {props.isMenuOpen ? <h6 className='sidebarHead'>Application</h6> : false}
                            <Link to="">
                                <AiFillPieChart />
                                {props.isMenuOpen ? <span>Dashboard</span> : false}
                            </Link>
                            <Link to="">
                                  <IoIosPeople />
                                {props.isMenuOpen ? <span>Dashboard</span> : false}
                            </Link>
                              <Link to="">
                                  <BsBagFill />
                                  {props.isMenuOpen ? <span>Dashboard</span> : false}
                              </Link>
                            <Link to="">
                                  <BiErrorCircle />
                                {props.isMenuOpen ? <span>Dashboard</span> : false}
                            </Link>
                              <Link to="">
                                  <BiErrorCircle />
                                  {props.isMenuOpen ? <span>Dashboard</span> : false}
                              </Link>

                              {props.isMenuOpen ? <h6 className='sidebarHead'>Application</h6> : false}
                              <Link to="">
                                  <BsBagFill />
                                  {props.isMenuOpen ? <span>Dashboard</span> : false}
                              </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
