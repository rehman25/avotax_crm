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
  var one = "Config";
  var two = "User management";
  return (
    <>
      <div className="allPages">
        <Sidebar {...{ isMenuOpen, setMenuOpen }} />
        <div className="innerBox">
          <Topbar {...{ hideShowMenuClick, one, two }} />
          <InnerTopbar
              roleFilter="Filters"
              UserManageIcon={filter_ico}
              RoleSearchBar={true}
              roleSetting={setting_ico}
              createRole="Create Job"
          />
          <div className="container">
            <div className="row">
              <div className="col-12 p-0">
                <div className="container marginTop">
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
