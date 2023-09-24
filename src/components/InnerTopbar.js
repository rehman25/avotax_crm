import React, { useState } from 'react'
import './assets/css/topbar.css'
import { LuFilter as Filter_ico} from 'react-icons/lu'
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { ClientTypes } from '../redux/slice/modalSlice';
import { CreateUserFun } from '../redux/slice/modalSlice';

// import AddUserForm from '../components/stepperForm/Assets'

function InnerTopbar(props) {

    const dispatch = useDispatch();
    return (
        <>
            <div className='InnerTopbar row'>
                <div className="col-lg-6 col-md-6 col-sm-6 innerLeftSide">
                    {props?.searchBar && (
                        <div className="searchInnerTopBar">
                            <BsSearch />
                            <input type="search" placeholder='Search ...'/>
                        </div>
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
                    {props?.UserConfigfilterBtn && (
                        <button >
                            <img src={props?.icon} alt="" />
                            {props?.UserConfigfilterBtn}
                        </button>
                    )}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 innerRightSide">
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
                    {/* ================ */}
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
                    {props?.CreateUser && (
                        <button className='CreateJobbtn' onClick={() => dispatch(CreateUserFun())}>{props?.CreateUser}</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default InnerTopbar
