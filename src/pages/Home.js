import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
    return (
        <>
            <div className="allPages">
                <Sidebar
                    // {...{ isMenuOpen, setMenuOpen }}
                />
                <div className="innerBox">
                    {/* <TopBar
                        {...{ hideShowMenuClick }}
                    /> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                hamza
                                {/* <AllOrdersCom /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home