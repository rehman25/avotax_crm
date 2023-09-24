import React from 'react'
import "./assets/css/usermanagement.css"
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function UserManagementCom() {
  return (
    <>
      <div className="row">
        <div className="col-lg-4">
            <div className="User_Admin_mainBox">
                <div className='User_Admin_Inner'>
                    <h5>Administrator</h5>
                    <ul className="User_Admin_Details">
                        <li><span>Add Admin Controls</span></li>
                        <li>View and Edit</li>
                        <li>Update</li>
                        <li>Enable Config</li>
                        <li>Add admin Controls</li>
                        <li>View and Edit</li>
                        <li>10 more....</li>
                    </ul>
                    <div className='Btn_Inner_Box'>
                        <button className='button'>View Role</button>
                        <button className='button'>Edit Role</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="User_Admin_mainBox">
            <div className='User_Admin_Inner'>
                <h5>Manager</h5>
                <ul className="User_Admin_Details">
                    <li>Add Admin Controls</li>
                    <li>View and Edit</li>
                    <li>Update</li>
                    <li>Enable Config</li>
                    <li>Add admin Controls</li>
                    <li>View and Edit</li>
                    <li>10 more....</li>
                </ul>
                <div className='Btn_Inner_Box'>
                    <button className='button'>View Role</button>
                    <button className='button'>Edit Role</button>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="User_Admin_mainBox">
            <div className='User_Admin_Inner'>
                <h5>Employee#1</h5>
                <ul className="User_Admin_Details">
                    <li>Add Admin Controls</li>
                    <li>View and Edit</li>
                    <li>Update</li>
                    <li>Enable Config</li>
                    <li>Add admin Controls</li>
                    <li>View and Edit</li>
                    <li>10 more....</li>
                </ul>
                <div className='Btn_Inner_Box'>
                    <button className='button'>View Role</button>
                    <button className='button'>Edit Role</button>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="User_Admin_mainBox">
            <div className='User_Admin_Inner'>
                <h5>Employee#2</h5>
                <ul className="User_Admin_Details">
                    <li>Add Admin Controls</li>
                    <li>View and Edit</li>
                    <li>Update</li>
                    <li>Enable Config</li>
                    <li>Add admin Controls</li>
                    <li>View and Edit</li>
                    <li>10 more....</li>
                </ul>
                <div className='Btn_Inner_Box'>
                    <button className='button'>View Role</button>
                    <button className='button'>Edit Role</button>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="User_Admin_mainBox">
            <div className='User_Admin_Inner'>
                <h5>Employee#3</h5>
                <ul className="User_Admin_Details">
                    <li>Add Admin Controls</li>
                    <li>View and Edit</li>
                    <li>Update</li>
                    <li>Enable Config</li>
                    <li>Add admin Controls</li>
                    <li>View and Edit</li>
                    <li>10 more....</li>
                </ul>
                <div className='Btn_Inner_Box'>
                    <button className='button'>View Role</button>
                    <button className='button'>Edit Role</button>
                </div>
            </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="User_Admin_mainBox">
            <div className='User_Admin_Inner'>
                <h5>Employee#4</h5>
                <ul className="User_Admin_Details">
                    <li>Add Admin Controls</li>
                    <li>View and Edit</li>
                    <li>Update</li>
                    <li>Enable Config</li>
                    <li>Add admin Controls</li>
                    <li>View and Edit</li>
                    <li>10 more....</li>
                </ul>
                <div className='Btn_Inner_Box'>
                    <button className='button'>View Role</button>
                    <button className='button'>Edit Role</button>
                </div>
            </div>
            </div>
        </div>
      </div>
      <div className="row mx-0 UMPaginationRow">
                <div className="col-lg-6">
                    <span className='UMtotalPage'>
                        10/Page
                    </span>
                </div>
                <div className="col-lg-6">
                    <div className='UMpagination'>
                        <span>1-10 of 100 items</span>
                        <span className='UMcipgnos'><MdOutlineArrowBackIos className='UMpagesICo' /></span>
                        <span className='d-flex align-items-center'><p className='UMpageno'>1</p><p className='UMpagenodot'>...</p><p className='UMpageno'>4</p><p className='UMpageno'>5</p><p className='UMpageno'>6</p><p className='UMpageno'>7</p><p className='UMpageno'>8</p><p className='UMpagenodot'>...</p> </span>
                        <span><MdOutlineArrowForwardIos className='UMpagesICo' /></span>
                    </div>
                </div>
            </div>

      

    </>
  )
}

export default UserManagementCom
