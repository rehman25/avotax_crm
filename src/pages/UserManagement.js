import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../components/assets/css/addmember.css";
import UserManagementCom from "../components/UserManagementCom";
import InnerTopbar from "../components/InnerTopbar";
import filter_ico from '../components/assets/images/filter.avi'
import setting_ico from '../components/assets/images/setting.avi'


function UserManagement() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hideShowMenuClick = () => {
    setMenuOpen((current) => !current);
  };
  var HeadTop="User management";
  var breadCrumOne="Config";
  var breadCrumTwo="User";
  return (
    <>
      <div className="allPages">
        <Sidebar {...{ isMenuOpen, setMenuOpen }} />
        <div className="innerBox">
          <Topbar {...{ hideShowMenuClick,HeadTop,breadCrumOne,breadCrumTwo }} />
          <InnerTopbar
              UserManageFilterBtn="Filters"
              UserManageFilterIcon={filter_ico}
              UserManageSearchBar={true}
              UserManageSetting={setting_ico}
              UserManageCreateRoleBtn="Create Role"
              UserManageDropDown={true}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 p-0">
                <div className="container-fluid marginTop">
                    <UserManagementCom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManagement;
