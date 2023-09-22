import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AiFillPieChart } from 'react-icons/ai';
import '../components/assets/css/sidebar.css'
import logo from '../components/assets/images/fullLogo.avi'
import logoIco from '../components/assets/images/logoIco.avi'
import {IoIosPeople} from 'react-icons/io'
import {BiErrorCircle} from 'react-icons/bi'
import { BsBagFill } from 'react-icons/bs'
import {FaMoneyBill} from 'react-icons/fa'
import {FaClipboardList} from 'react-icons/fa'
import {RiSettings5Fill} from 'react-icons/ri'


export default function Sidebar(props) {
    const [isOpen, setIsopen] = useState(false)
    const handleClose = () =>{
        setIsopen(true)
    }
    return (
    <>
        <div className="mainSideBar" id={props.isMenuOpen ?  "openBar" : "closeBar"} isOpen={!isOpen}>
            <div className="innerSideBar">
                <div className="positionBox">
                    <div className="sidebarScrollBox">
                        <div className="logoBox">
                                <span className='sideclose' onClick={() => setIsopen(handleClose)}>X</span>
                              {props.isMenuOpen ? <img src={logo} alt="" /> : <img src={logoIco} alt="" className='toggleLogo' />}
                        </div>
                          <div className="SideNav">
                              {props.isMenuOpen ? <h6 className='sidebarHead'>Application</h6> : false}
                            <Link to="">
                                <AiFillPieChart className='DashboardIco' />
                                {props.isMenuOpen ? <span>Dashboard</span> : false}
                            </Link>
                        </div>
                        <div className='SideNav'>
                              {props.isMenuOpen ? <h6 className='sidebarHead'>Management</h6> : false}
                              <Link to="">
                                  <IoIosPeople />
                                  {props.isMenuOpen ? <span>Team Management</span> : false}
                              </Link>
                              <Link to="">
                                  <BiErrorCircle />
                                  {props.isMenuOpen ? <span>Client</span> : false}
                              </Link>
                              <Link to="">
                                  <BsBagFill />
                                  {props.isMenuOpen ? <span>Jobs</span> : false}
                              </Link>

                              <Link to="">
                                  <FaMoneyBill />
                                  {props.isMenuOpen ? <span>Payroll</span> : false}
                              </Link>
                        </div>
                          <div className='SideNav'>
                              {props.isMenuOpen ? <h6 className='sidebarHead'>Others</h6> : false}
                              <Link to="">
                                  <FaClipboardList />
                                  {props.isMenuOpen ? <span>Config</span> : false}
                              </Link>
                              <Link to="">
                                  <FaClipboardList />
                                  {props.isMenuOpen ? <span>Reports</span> : false}
                              </Link>
                              <Link to="">
                                  <RiSettings5Fill />
                                  {props.isMenuOpen ? <span>Settings</span> : false}
                              </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
