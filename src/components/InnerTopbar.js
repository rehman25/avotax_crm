import React, { useState } from 'react'
import './assets/css/topbar.css'
import { LuFilter as Filter_ico} from 'react-icons/lu'
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { ClientTypes } from '../redux/slice/modalSlice';
import { CreateUserFun } from '../redux/slice/modalSlice';

function InnerTopbar(props) {

    const dispatch = useDispatch();
    return (
        <>
            <div className='InnerTopbar row'>
                <div className="col-lg-6 col-md-6  innerLeftSide">

                    
                    {/* CLIENT INFO PAGE TOP BAR LEFT SIDE =-=-=-=-= */}
                    {props?.searchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...'/>
                        </div>
                    )}
                    {props?.UMsearchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...' />
                        </div>
                    )}
                    {props?.RoleSearchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...'/>
                        </div>
                    )}
                    {props?.roleSetting && (
                        <span className='mx-2'>
                            <img src={props?.roleSetting} alt="" />
                        </span>
                    )}
                    {props?.setting && (
                        <span className='mx-2'>
                            <img src={props?.setting} alt="" />
                        </span>
                    )}
                    {props?.filterBtn2 && (
                        <button>
                            <img src={props?.icon} alt="" />
                            {props?.filterBtn2}
                        </button> 
                    )}
                    {props?.roleFilter && (
                        <button>
                            <img src={props?.UserManageIcon} alt="" />
                            {props?.roleFilter}
                        </button> 
                    )}
                    {props?.UserConfigfilterBtn && (
                        <button >
                            <img src={props?.icon} alt="" />
                            {props?.UserConfigfilterBtn}
                        </button>
                    )}
                    {props?.UMfilter && (
                        <button >
                            <img src={props?.icon} alt="" />
                            {props?.UMfilter}
                        </button>
                    )}
                </div>
                <div className="col-lg-6 col-md-6  innerRightSide">
                    {props?.filterBtn && (
                        <button>
                            <img src={props?.icon} alt="" />
                            {props?.filterBtn}
                        </button> 
                    )}

                    {props?.createJob && (
                        <button className='CreateJobbtn'>{props?.createJob}</button>
                    )}
                    {props?.createNew && (
                        <button className='CreateJobbtn'>{props?.createNew}</button>
                    )}

                    {/* CLIENT INFO PAGE TOP BAR RIGHT SIDE =-=-=-=-= */}
                    {props?.clientDropDown && (
                        <select class="form-select w-50">
                            <option selected>Client</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    )}
                    {props?.UserCongigDropDown && (
                        <select class="form-select w-50">
                            <option selected>My Comment</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    )}
                    {props?.BulkBtn && (
                        <button className='bulkBtn'>{props?.BulkBtn}</button>
                    )}
                    {props?.addClient && (
                        <button className='CreateJobbtn' onClick={() => dispatch(ClientTypes())}>{props?.addClient}</button>
                    )}
                    {props?.createRole && (
                        <button className='CreateJobbtn'>{props?.createRole}</button> 
                    )}
                    {props?.CreateUser && (
                        <button className='CreateJobbtn' onClick={() => dispatch(CreateUserFun())}>{props?.CreateUser}</button>
                    )}
                    {props?.CreatRole && (
                        <button className='CreateJobbtn' onClick={() => dispatch(CreateUserFun())}>{props?.CreatRole}</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default InnerTopbar
