import React from 'react'
import "./assets/css/memberDetails.css"
import { BiMessageDetail } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import user_img from "./assets/images/user.avi";

function MemberDetails() {
  return (
    <>
        <div className="col-lg-8 p-0">
            <div className='member_detail'>
            <div className='sub_member_detail'>
                <h6>Member details</h6>
                <span>
                <button className='message-button'><BiMessageDetail/> Messge</button>
                <button className='btn_dotted'><BiDotsHorizontalRounded/></button>
                </span>
                 </div>
                 <div>
                 <div class='employe_detail'>
                   <img src={user_img} alt="" />
                   <div className='employee_data'>
                   <h5>Smith Johnson</h5>
                  <span>Managing partner</span>
                  <span className='emp_contact'>
                    <p><BsFillTelephoneFill/> 613-722-2183</p>
                    <p><BsEnvelope/> derek@gmail.com</p>
                  </span>
                  </div>
                </div>
            </div>
            </div>
           
        </div>
    </>
  )
}

export default MemberDetails
