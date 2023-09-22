import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import ClientInfotable from '../components/clientInfo/clientInfotable'

function ClientInfo() {
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
                    <div className="container mt-2">
                        <div className="row">
                            <ClientInfotable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientInfo