import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AiFillPieChart } from 'react-icons/ai';
import '../components/assets/css/sidebar.css'
import logo from '../components/assets/images/fullLogo.png'
import logoIco from '../components/assets/images/logoIco.png'
import {IoIosPeople} from 'react-icons/io'
import {BiErrorCircle} from 'react-icons/bi'
import { BsBagFill } from 'react-icons/bs'
import {FaMoneyBill} from 'react-icons/fa'
import {FaClipboardList} from 'react-icons/fa'
import { GrClose } from 'react-icons/gr';
import {RiSettings5Fill} from 'react-icons/ri'
import { useNavigate, NavLink } from 'react-router-dom'


export default function Sidebar(props) {
    // const [isOpen, setIsopen] = useState(false)
    // const handleClose = () =>{
    //     setIsopen(true)
    // }
    return (
    <>
        <div className="mainSideBar" id={props.isMenuOpen ?  "openBar" : "closeBar"}>
            <div className="innerSideBar" id={props.isMenuOpen ?  "openBox" : "closeBox"}>
                <div className="positionBox">
                    <div className="sidebarScrollBox">
                        <div className="logoBox">
                                {props.isMenuOpen ? <GrClose onClick={() => {props?.setMenuOpen(false)}}/> : false}
                                {props.isMenuOpen ? <img src={logo} alt="" /> : <img src={logoIco} alt="" className='toggleLogo' />}
                        </div>
                          <div className="SideNav">
                              {props.isMenuOpen ? <h6 className='sidebarHead'>Application</h6> : false}
                            <NavLink to="/cls">
                                <AiFillPieChart className='DashboardIco' />
                                {props.isMenuOpen ? <span>Dashboard</span> : false}
                            </NavLink>
                        </div>
                        <div className='SideNav'>
                              {props.isMenuOpen ? <h6 className='sidebarHead'>Management</h6> : false}
                              <NavLink to="/UserManagement">
                                  <IoIosPeople />
                                  {props.isMenuOpen ? <span>Team Management</span> : false}
                              </NavLink>
                              <NavLink to="/ClientInfo">
                                  <BiErrorCircle />
                                  {props.isMenuOpen ? <span>Client</span> : false}
                              </NavLink>
                              <NavLink to="/Job">
                                  <BsBagFill />
                                  {props.isMenuOpen ? <span>Jobs</span> : false}
                              </NavLink>

                              <NavLink to="/home">
                                  <FaMoneyBill />
                                  {props.isMenuOpen ? <span>Payroll</span> : false}
                              </NavLink>
                        </div>
                          <div className='SideNav'>
                              {props.isMenuOpen ? <h6 className='sidebarHead'>Others</h6> : false}
                                <NavLink to="/UserManagementConfig">
                                  <FaClipboardList />
                                  {props.isMenuOpen ? <span>Config</span> : false}
                              </NavLink>
                                <NavLink to="/home">
                                  <FaClipboardList />
                                  {props.isMenuOpen ? <span>Reports</span> : false}
                              </NavLink>
                                <NavLink to="/home">
                                  <RiSettings5Fill />
                                  {props.isMenuOpen ? <span>Settings</span> : false}
                              </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
