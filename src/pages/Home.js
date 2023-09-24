import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import AnnualRevenue from '../components/dashboardTables/AnnualRevenue'
import TeamManagement from '../components/dashboardTables/TeamManagement'
import JobProgress from '../components/dashboardTables/JobProgress'
import OverdueJob from '../components/dashboardTables/OverdueJob'
import WipPartner from '../components/dashboardTables/WipPartner'
import SalesOverView from '../components/dashboardTables/SalesOverView'
import InnerTopbar from '../components/InnerTopbar'
import filter_ico from '../components/assets/images/filter.avi'


function Home() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const hideShowMenuClick = () => {
        setMenuOpen(current => !current)
    }
    var one="Home";
    var two="Team management";
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
                        filterBtn="Filter"
                        icon={filter_ico}
                        createJob="Create Job"
                    />
                    <div className="container marginTop">
                        <div className="row">
                            <div className="col-lg-6">
                                <AnnualRevenue />
                            </div>
                            <div className="col-lg-6">
                                <TeamManagement />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-lg-6">
                                <JobProgress />
                            </div>
                            <div className="col-lg-6">
                                <OverdueJob />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-lg-6">
                                <WipPartner />
                            </div>
                            <div className="col-lg-6">
                                <SalesOverView />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home