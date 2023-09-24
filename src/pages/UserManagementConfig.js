import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import InnerTopbar from '../components/InnerTopbar'
import UserManagementConfigCom from '../components/UserManagementConfigCom'


function UserManagementConfig() {
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
                    <InnerTopbar  />
                    <div className="container mt-5">
                        <UserManagementConfigCom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserManagementConfig