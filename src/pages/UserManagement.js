import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../components/assets/css/addmember.css";
import UserManagementCom from "../components/UserManagementCom";

function UserManagement() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hideShowMenuClick = () => {
    setMenuOpen((current) => !current);
  };
  var one = "Home";
  var two = "Team management";
  return (
    <>
      <div className="allPages">
        <Sidebar {...{ isMenuOpen, setMenuOpen }} />
        <div className="innerBox">
          <Topbar {...{ hideShowMenuClick, one, two }} />
          <div className="container">
            <div className="row">
              <div className="col-12 p-0">
                <div className="container mb-5">
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
