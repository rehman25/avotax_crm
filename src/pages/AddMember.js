import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import "../components/assets/css/addmember.css"
import AddMemberCom from '../components/AddMemberCom'
import filter_ico from '../components/assets/images/filter.avi'
import InnerTopbar from '../components/InnerTopbar'


function AddMember() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const hideShowMenuClick = () => {
        setMenuOpen(current => !current)
    }
    var HeadTop="Team management";
    var breadCrumOne="Home";
    var breadCrumTwo="Team management";
    return (
        <>
            <div className="allPages">
                <Sidebar
                    {...{ isMenuOpen, setMenuOpen }}
                />
                <div className="innerBox">
                    <Topbar
                        {...{ hideShowMenuClick,HeadTop,breadCrumOne,breadCrumTwo   }}
                    />
                    <InnerTopbar
                        addMemberFilterBtn="Filters"
                        addMemberFilterIcon={filter_ico}
                        addMemberCreateNew="Create New"
                    />
                    <div className="container-fluid marginTop">
                        <div className="row">
                            <div className="col-12">
                                <div className='container-fluid mb-5'>
                                <AddMemberCom/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddMember