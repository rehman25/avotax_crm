import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import user_img from "./assets/images/user.avi";
import addmemberimg from "./assets/images/addmemberimg.webp";
import MemberDetails from "./MemberDetails";
import CreateMember from "./modal/CreateMember";

function AddMemberCom() {
  const [isShow, setShow] = useState(false);
  const [isShowCreateMember,setShowCreateMember] = useState(false)
  return (
    <>
      <div className="row">
        <div className="col-lg-4 p-0">
          <div className="member_leftBarMainBox">
            <div className="search-bar">
              <BiSearchAlt2 />
              <input
                type="text"
                class="search-input"
                placeholder="Search member"
              ></input>
            </div>

            <div className="overflow">
              <div
                className="team_member"
                onClick={() => {
                  setShow(!isShow);
                }}
              >
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
                </div>
              </div>
              <div className="team_member">
                <img src={user_img} alt="" />
                <div class="team_detail">
                  <h5>hamza</h5>
                  <span>ceo</span>
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
            <div className="col-lg-8 p-0">
              <div className="Add_member_panel">
                <img src={addmemberimg} alt="" />
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
