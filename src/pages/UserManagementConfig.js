import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import InnerTopbar from '../components/InnerTopbar'
import UserManagementConfigCom from '../components/UserManagementConfigCom'
import filter_ico from '../components/assets/images/filter.avi'
import setting_ico from '../components/assets/images/setting.avi'


function UserManagementConfig() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const hideShowMenuClick = () => {
        setMenuOpen(current => !current)
    }
    var one = "User";
    var two = "Config";
    return (
        <>
            <div className="allPages">
                <Sidebar
                    {...{ isMenuOpen, setMenuOpen }}
                />
                <div className="innerBox">
                    <Topbar
                        {...{ hideShowMenuClick, one, two }}
                    />
                    <InnerTopbar
                        CreateUser="Create User"
                        UserConfigfilterBtn="Filters"
                        icon={filter_ico}
                        UserCongigDropDown={true}
                        setting={setting_ico}
                        searchBar={true}
                    />
                    <div className="container marginTop">
                        <UserManagementConfigCom />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserManagementConfig