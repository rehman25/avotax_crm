import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import user_img from "./assets/images/user.avi";
import contact from "./assets/images/contact.svg.svg";
import MemberDetails from "./MemberDetails";
import CreateMember from "./modal/CreateMember";

function AddMemberCom() {
  const [isShow, setShow] = useState(false);
  const [isShowCreateMember,setShowCreateMember] = useState(false)
  return (
    <>
      <div className="row">
        <div className="col-lg-3 p-0">
          <div className="member_leftBarMainBox">
            <div className="search-bar">
              <BiSearchAlt2 />
              <input
                type="text"
                className="search-input"
                placeholder="Search member"
              ></input>
            </div>

            <div className="overflowBox">
              <div
                className="team_member"
                onClick={() => {
                  setShow(!isShow);
                }}
              >
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Smith John</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Kat jim</h5>
                  <span>Manager</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Loe Janna</h5>
                  <span>Marketing Manager</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Emma Smith</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Caesa</h5>
                  <span>General Manager</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Emma Smith</h5>
                  <span>General Manager</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Emma Smith</h5>
                  <span>Employee</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Emma Smith</h5>
                  <span>Employee</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>David</h5>
                  <span>Employee</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Watson</h5>
                  <span>Employee</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Jackon</h5>
                  <span>Employee</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div className="team_detail">
                  <h5>Albert</h5>
                  <span>Employee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isShow ? (
          <>
            <MemberDetails />
          </>
        ) : (
          <>
            <div className="col-lg-9 p-0">
              <div className="Add_member_panel">
                <img src={contact} alt="" />
                <h5>Manage and connect with your team</h5>
                <p>
                  Add your team member or manage there <br /> status by clicking
                  them
                </p>

                <button className="add-member-btn" onClick={() => {setShowCreateMember(!isShowCreateMember)}}>Add Member</button>
              </div>
            </div>
          </>
        )}
      </div>

      {isShowCreateMember && (
        <CreateMember 
        {...{setShowCreateMember,isShowCreateMember}}
        />
      )}
    </>
  );
}

export default AddMemberCom;
