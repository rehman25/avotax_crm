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
    var one="Home"
    var two="Team management"
    return (
        <>
            <div className="allPages">
                <Sidebar
                    {...{ isMenuOpen, setMenuOpen }}
                />
                <div className="innerBox">
                    <Topbar
                        {...{ hideShowMenuClick,one,two  }}
                    />
                    <InnerTopbar
                        filterBtn="Filters"
                        icon={filter_ico}
                        createNew="Create New"
                    />
                    <div className="container marginTop">
                        <div className="row">
                            <div className="col-12 p-0">
                            <div className='container mb-5'>
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