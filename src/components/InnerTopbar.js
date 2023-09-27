import React, { useState } from 'react'
import './assets/css/topbar.css'
import { LuFilter as Filter_ico} from 'react-icons/lu'
import { BsSearch } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { ClientTypes } from '../redux/slice/modalSlice';
import { CreateUserFun } from '../redux/slice/modalSlice';
import { CreateJobFun } from '../redux/slice/modalSlice';
import { CreateRoleFun } from '../redux/slice/modalSlice';
import { SearchBarSettingFun } from '../redux/slice/modalSlice';
import { SearchSubFun } from '../redux/slice/modalSlice';
import SearchSetting from './SearchSetting';
import filter_ico from '../components/assets/images/filter.avi'
import SettingSubBar from './SettingSubBar';

function InnerTopbar(props) {
    const dispatch = useDispatch();
    const isSearchBarSettingModal = useSelector((state) => state.ModalSlice.SearchBarModal);
    const isSettingSubModal = useSelector((state) => state.ModalSlice.SettingSubModal);

    return (
        <>
            <div className='InnerTopbar row'>
                <div className="col-lg-6 col-md-6  innerLeftSide">

                    
                    {/* CLIENT INFO PAGE TOP BAR ON LEFT SIDE =-=-=-=-= */}
                    {props?.addClientSearchBar && (
                        <>
                            <div className="searchInnerTopBar">
                                <BsSearch />
                                <input type="search" placeholder='Search ...' className="searchInput" onClick={() => dispatch(SearchBarSettingFun())}/>
                                {isSearchBarSettingModal && (
                                   <img src={filter_ico} alt='search'/>
                                )}
                                {isSearchBarSettingModal && (
                                    <SearchSetting />
                                )}
                            </div>
                            
                        </>
                    )}
                    {props?.addClientSetting && (
                        <>
                            <span className='mx-2'  >
                                <img src={props?.addClientSetting} alt="" onClick={() => dispatch(SearchSubFun())}/>
                                {isSettingSubModal && (
                                    <SettingSubBar />
                                )}
                            </span>
                        </>
                    )}
                    {props?.addClientFilterBtn && (
                        <button className='hiddenFilterBtn'>
                            <img src={props?.addClientFilterIcon} alt="" />
                            {props?.addClientFilterBtn}
                        </button> 
                    )}

                     {/* JOB PAGE TOP BAR ON LEFT SIDE =-=-=-=-= */}
                    {props?.jobsSearchBar && (
                        <>
                            <div className="searchInnerTopBar">
                                <BsSearch />
                                <input type="search" placeholder='Search ...' className="searchInput" onClick={() => dispatch(SearchBarSettingFun())}/>
                                {isSearchBarSettingModal && (
                                   <img src={filter_ico} alt='search'/>
                                )}
                                {isSearchBarSettingModal && (
                                    <SearchSetting />
                                )}
                            </div>
                            
                        </>
                    )}
                    {props?.jobsSettingIcon && (
                        <>
                            <span className='mx-2'  >
                                <img src={props?.jobsSettingIcon} alt="" onClick={() => dispatch(SearchSubFun())}/>
                                {isSettingSubModal && (
                                    <SettingSubBar />
                                )}
                            </span>
                        </>
                    )}

                    {props?.jobsFilterBtn && (
                        <button className='hiddenFilterBtn'>
                            <img src={props?.jobsFIltericon} alt="" />
                            {props?.jobsFilterBtn}
                        </button> 
                    )}

                     {/* User Management TOP BAR ON LEFT SIDE =-=-=-=-= */}
                    {props?.UserManageSearchBar && (
                        <>
                            <div className="searchInnerTopBar">
                                <BsSearch />
                                <input type="search" placeholder='Search ...' className="searchInput" onClick={() => dispatch(SearchBarSettingFun())}/>
                                {isSearchBarSettingModal && (
                                    <img src={filter_ico} alt='search'/>
                                )}
                                {isSearchBarSettingModal && (
                                    <SearchSetting />
                                )}
                            </div>
                            
                        </>
                    )}

                    {props?.UserManageSetting && (
                        <>
                            <span className='mx-2'  >
                                <img src={props?.UserManageSetting} alt="" onClick={() => dispatch(SearchSubFun())}/>
                                {isSettingSubModal && (
                                    <SettingSubBar />
                                )}
                            </span>
                        </>
                    )}
                    {props?.UserManageFilterBtn && (
                        <button className='hiddenFilterBtn'>
                            <img src={props?.UserManageFilterIcon} alt="" />
                            {props?.UserManageFilterBtn}
                        </button> 
                    )}
                     {/* User Management TOP BAR ON LEFT SIDE =-=-=-=-= */}
                    {props?.UserManageConfigSearchBar && (
                        <>
                            <div className="searchInnerTopBar">
                                <BsSearch />
                                <input type="search" placeholder='Search ...' className="searchInput" onClick={() => dispatch(SearchBarSettingFun())}/>
                                {isSearchBarSettingModal && (
                                <img src={filter_ico} alt='search'/>
                                )}
                                {isSearchBarSettingModal && (
                                    <SearchSetting />
                                )}
                            </div>
                            
                        </>
                    )}
                    {props?.UserManageConfigSetting && (
                        <>
                            <span className='mx-2'  >
                                <img src={props?.UserManageConfigSetting} alt="" onClick={() => dispatch(SearchSubFun())}/>
                                {isSettingSubModal && (
                                    <SettingSubBar />
                                )}
                            </span>
                        </>
                    )}
                    {props?.UserManageConfigFilterBtn && (
                        <button  className='hiddenFilterBtn'>
                            <img src={props?.UserManageConfigFilterIcon} alt="" />
                            {props?.UserManageConfigFilterBtn}
                        </button> 
                    )}
                </div>
                <div className="col-lg-6 col-md-6 innerRightSide">
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
                        <select className="form-select w-50">
                            <option selected>Client</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    )}
                    {props?.addClientBulkBtn && (
                        <button className='bulkBtn hiddenFilterBtn'>{props?.addClientBulkBtn}</button>
                    )}
                    {props?.addClientBtn && (
                        <button className='CreateJobbtn' onClick={() => dispatch(ClientTypes())}>{props?.addClientBtn}</button>
                    )}

                    {/* JOB PAGE TOP BAR ON RIGHT SIDE =-=-=-=-= */}
                    {props?.allJobDropDown && (
                        <select className="form-select w-50">
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
                        <select className="form-select w-50">
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
                        <select className="form-select w-50">
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
