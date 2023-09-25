import React, { useState } from 'react'
import './assets/css/topbar.css'
import { LuFilter as Filter_ico} from 'react-icons/lu'
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { ClientTypes } from '../redux/slice/modalSlice';
import { CreateUserFun } from '../redux/slice/modalSlice';
import { CreateJobFun } from '../redux/slice/modalSlice';
import { CreateRoleFun } from '../redux/slice/modalSlice';




function InnerTopbar(props) {

    const dispatch = useDispatch();
    return (
        <>
            <div className='InnerTopbar row'>
                <div className="col-lg-6 col-md-6  innerLeftSide">

                    
                    {/* CLIENT INFO PAGE TOP BAR ON LEFT SIDE =-=-=-=-= */}
                    {props?.addClientSearchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...'/>
                        </div>
                    )}
                    {props?.addClientSetting && (
                        <span className='mx-2'>
                            <img src={props?.addClientSetting} alt="" />
                        </span>
                    )}
                    {props?.addClientFilterBtn && (
                        <button>
                            <img src={props?.addClientFilterIcon} alt="" />
                            {props?.addClientFilterBtn}
                        </button> 
                    )}

                     {/* JOB PAGE TOP BAR ON LEFT SIDE =-=-=-=-= */}
                     {props?.jobsSearchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...'/>
                        </div>
                    )}
                    {props?.jobsSettingIcon && (
                        <span className='mx-2'>
                            <img src={props?.jobsSettingIcon} alt="" />
                        </span>
                    )}
                    {props?.jobsFilterBtn && (
                        <button>
                            <img src={props?.jobsFIltericon} alt="" />
                            {props?.jobsFilterBtn}
                        </button> 
                    )}

                     {/* User Management TOP BAR ON LEFT SIDE =-=-=-=-= */}
                    {props?.UserManageSearchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...'/>
                        </div>
                    )}
                    {props?.UserManageSetting && (
                        <span className='mx-2'>
                            <img src={props?.UserManageSetting} alt="" />
                        </span>
                    )}
                    {props?.UserManageFilterBtn && (
                        <button>
                            <img src={props?.UserManageFilterIcon} alt="" />
                            {props?.UserManageFilterBtn}
                        </button> 
                    )}
                     {/* User Management TOP BAR ON LEFT SIDE =-=-=-=-= */}
                     {props?.UserManageConfigSearchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...'/>
                        </div>
                    )}
                    {props?.UserManageConfigSetting && (
                        <span className='mx-2'>
                            <img src={props?.UserManageConfigSetting} alt="" />
                        </span>
                    )}
                    {props?.UserManageConfigFilterBtn && (
                        <button>
                            <img src={props?.UserManageConfigFilterIcon} alt="" />
                            {props?.UserManageConfigFilterBtn}
                        </button> 
                    )}
                    {props?.UMfilter && (
                        <button >
                            <img src={props?.icon} alt="" />
                            {props?.UMfilter}
                        </button>
                    )}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 innerRightSide">
                    {/* HOME PAGE TOP BAR ON RIGHT SIDE =============================================== */}
                    {props?.homeFilterBtn && (
                        <button>
                            <img src={props?.homeFilericon} alt="" />
                            {props?.homeFilterBtn}
                        </button> 
                    )}
                    {props?.createJobHome && (
                        <button className='CreateJobbtn'>{props?.createJobHome}</button>
                    )}

                    {/* Add MEMBER PAGE  TOP BAR ON RIGHT SIDE =============================================== */}
                    {props?.addMemberFilterBtn && (
                        <button>
                            <img src={props?.addMemberFilterIcon} alt="" />
                            {props?.addMemberFilterBtn}
                        </button> 
                    )}
                    {props?.addMemberCreateNew && (
                        <button className='CreateJobbtn'>{props?.addMemberCreateNew}</button>
                    )}
                    
                     {/* CLIENT INFO PAGE TOP BAR ON RIGHT SIDE =-=-=-=-= */}
                     {props?.addClientDropDown && (
                        <select class="form-select w-50">
                            <option selected>Client</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    )}
                    {props?.addClientBulkBtn && (
                        <button className='bulkBtn'>{props?.addClientBulkBtn}</button>
                    )}
                    {props?.addClientBtn && (
                        <button className='CreateJobbtn' onClick={() => dispatch(ClientTypes())}>{props?.addClientBtn}</button>
                    )}

                    {/* JOB PAGE TOP BAR ON RIGHT SIDE =-=-=-=-= */}
                    {props?.allJobDropDown && (
                        <select class="form-select w-50">
                            <option selected>All Job</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    )}
                    {props?.createJobBtn && (
                        <button className='CreateJobbtn'  onClick={() => dispatch(CreateJobFun())}>{props?.createJobBtn}</button>
                    )}

                    {/* User Management TOP BAR ON RIGHT SIDE =============================================== */}
                    {props?.UserManageDropDown && (
                        <select class="form-select w-50">
                            <option selected>My Comment</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    )}
                    {props?.UserManageCreateRoleBtn && (
                        <button className='CreateJobbtn' onClick={() => dispatch(CreateRoleFun())}>{props?.UserManageCreateRoleBtn}</button>
                    )}
                    
                    {/* User Management CONFIG TOP BAR ON RIGHT SIDE =============================================== */}
                    {props?.UserManageConfigDropDown && (
                        <select class="form-select w-50">
                            <option selected>My Comment</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    )}
                    {props?.UserManageConfigCreateUserBtn && (
                        <button className='CreateJobbtn' onClick={() => dispatch(CreateUserFun())}>{props?.UserManageConfigCreateUserBtn}</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default InnerTopbar
