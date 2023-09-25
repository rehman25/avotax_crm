import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import ClientInfoCom from '../components/clientInfo/ClientInfoCom'
import InnerTopbar from '../components/InnerTopbar'
import filter_ico from '../components/assets/images/filter.avi'
import setting_ico from '../components/assets/images/setting.avi'



function ClientInfo() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const hideShowMenuClick = () => {
        setMenuOpen(current => !current)
    }
    var HeadTop="Client Info";
    var breadCrumOne="Home";
    var breadCrumTwo="Client Info";
    return (
        <>
            <div className="allPages">
                <Sidebar
                    {...{ isMenuOpen, setMenuOpen }}
                />
                <div className="innerBox">
                    <Topbar
                        {...{ hideShowMenuClick,HeadTop,breadCrumOne,breadCrumTwo  }}
                    />
                    <InnerTopbar
                        addClient="Add Client"
                        BulkBtn="Bulk Invite"
                        filterBtn2="Filters"
                        icon={filter_ico}
                        clientDropDown={true}
                        setting={setting_ico}
                        searchBar={true}
                    />
                    <div className="container marginTop">
                        <div className="row">
                            <ClientInfoCom />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientInfo