import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import JobTable from '../components/job/JobTable'
import InnerTopbar from '../components/InnerTopbar'
import filter_ico from '../components/assets/images/filter.avi'
import setting_ico from '../components/assets/images/setting.avi'



function Job(){
    const [isMenuOpen, setMenuOpen] = useState(false)
    const hideShowMenuClick = () => {
        setMenuOpen(current => !current)
    }
    var HeadTop="Job";
    var breadCrumOne="Home";
    var breadCrumTwo="Jobs";
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
                        createJobBtn="Create Job"
                        allJobDropDown={true}
                        jobsFilterBtn="Filters"
                        jobsFIltericon={filter_ico}
                        jobsSettingIcon={setting_ico}
                        jobsSearchBar={true}
                    />
                    <div className="container marginTop">
                        <JobTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Job