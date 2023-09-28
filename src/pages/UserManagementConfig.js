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
    var HeadTop="User management";
    var breadCrumOne="Config";
    var breadCrumTwo="User";
    return (
        <>
            <div className="allPages">
                <Sidebar
                    {...{ isMenuOpen, setMenuOpen }}
                />
                <div className="innerBox">
                    <Topbar
                        {...{ hideShowMenuClick, HeadTop,breadCrumOne,breadCrumTwo }}
                    />
                    <InnerTopbar
                        UserManageConfigCreateUserBtn="Create User"
                        UserManageConfigDropDown={true}
                        UserManageConfigSearchBar={true}
                        UserManageConfigSetting={setting_ico}
                        UserManageConfigFilterBtn="Filters"
                        UserManageConfigFilterIcon={filter_ico}
                    />
                    <div className="container-fluid marginTop">
                        <div className="row">
                            <div className="col-12">
                                <UserManagementConfigCom />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserManagementConfig