import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import "../components/assets/css/addmember.css"
import AddMemberCom from '../components/AddMemberCom'

function AddMember() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const hideShowMenuClick = () => {
        setMenuOpen(current => !current)
    }
    return (
        <>
            <div className="allPages">
                <Sidebar
                    {...{ isMenuOpen, setMenuOpen }}
                />
                <div className="innerBox">
                    <Topbar
                        {...{ hideShowMenuClick }}
                    />
                    <div className="container">
                        <div className="row">
                            <div className="col-12 p-0">
                            <div className='container'>
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