import React, { useState } from 'react'
import "./assets/css/memberDetails.css"
import { BiMessageDetail } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BiDotsVertical } from 'react-icons/bi';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillDribbbleSquare } from 'react-icons/ai';
import showPwdImg from './assets/images/hide.avi'
import hidePwdImg from './assets/images/show.avi'
import user_img from "./assets/images/user.avi";
import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

function MemberDetails() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <>
      <div className="col-lg-9 p-0">
        <div className='member_detail'>
          <div className='sub_member_detail'>
            <h6>Member details</h6>
            <span>
              <button className='message-button'><BiMessageDetail /> Message</button>
              <button className='btn_dotted'><BiDotsHorizontalRounded /></button>
            </span>
          </div>
          <div>
            <div className='employe_detail'>
              <img src={user_img} alt="" />

              <div className='employee_data'>
                <h5>Smith Johnson</h5>
                <span>Managing partner</span>

                <div className='emp_contact'>
                  <p><BsFillTelephoneFill /> 613-722-2183</p>
                  <p><BsEnvelope /> derek@gmail.com</p>
                </div>

              </div>

            </div>
            <div className='memberDetailsTabs'>
              <Tabs>
                <TabList>
                  <Tab>
                      <AiFillHome />
                      <span>General</span>
                  </Tab>
                  <Tab>
                      <FaTasks />
                      <span>Task Track</span>
                  </Tab>
                </TabList>

                <TabPanel>
                    <div>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 generalTab">
                            <div className="generalInnerInfo">
                              <span>Compnay name</span>
                              <h6>Johns and sons</h6>
                            </div>

                            <div className="generalInnerInfo">
                              <span>City</span>
                              <h6>New york</h6>
                            </div>

                            <div className="generalInnerInfo">
                              <span>Country</span>
                              <h6>United States</h6>
                            </div>

                            <div className="generalInnerInfo">
                              <span>user name</span>
                              <h6>Smith</h6>
                            </div>

                            <div className="generalInnerInfo">
                              <span>Password</span>
                              <input type={isRevealPwd ? "text" : "password"} />
                              <img
                                  title={isRevealPwd ? "Hide password" : "Show password"}
                                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                                  onClick={() => setIsRevealPwd(prevState => !prevState)}
                              />
                            </div>

                            <div className="generalInnerInfo">
                              <span>note</span>
                              <h6>started 1 year, 6 months ago</h6>
                            </div>

                            <div className="generalInnerInfo">
                              <span>Social links</span>
                              <div className="social_links">
                                <AiFillLinkedin  className='m-0'/>
                                <AiFillFacebook />
                                <AiFillTwitterSquare />
                                <AiFillDribbbleSquare />
                              </div>
                            </div>

                          </div>
                          <div className="col-lg-9 generalTabRightArea">
                            <div className="rightAreaFlex">
                              <div className="headBox">
                                <h6>Track Task</h6>
                                <span>Currently you have <a href=""><b>2 active task</b></a></span>
                              </div>
                              <div className='dataPicker'>
                                  <RangePicker />
                              </div>
                            </div>
                            <div className="getTaskBox">
                                <table className="tableee">
                                  <tbody>
                                    <tr>
                                      <td style={{borderLeft: "5px solid #2DACF2"}}>T2</td>
                                      <td>Dec 31 2020</td>
                                      <td>415452452 canada inc -sean swarts</td>
                                      <td>
                                        <span style={{background: "#F1FAFF"}}>in progress</span>
                                      </td>
                                      <td>
                                        <BiDotsVertical />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{borderLeft: "5px solid #2DACF2"}}>T2</td>
                                      <td>Dec 31 2020</td>
                                      <td>415452452 canada inc -sean swarts</td>
                                      <td>
                                        <span style={{background: "#F1FAFF"}}>in progress</span>
                                      </td>
                                      <td>
                                        <BiDotsVertical />
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style={{borderLeft: "5px solid #2DACF2"}}>T2</td>
                                      <td>Dec 31 2020</td>
                                      <td>415452452 canada inc -sean swarts</td>
                                      <td>
                                        <span style={{background: "#F1FAFF"}}>in progress</span>
                                      </td>
                                      <td>
                                        <BiDotsVertical />
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style={{borderLeft: "5px solid #2DACF2"}}>T2</td>
                                      <td>Dec 31 2020</td>
                                      <td>415452452 canada inc -sean swarts</td>
                                      <td>
                                        <span style={{background: "#F1FAFF"}}>in progress</span>
                                      </td>
                                      <td>
                                        <BiDotsVertical />
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style={{borderLeft: "5px solid #2DACF2"}}>T2</td>
                                      <td>Dec 31 2020</td>
                                      <td>415452452 canada inc -sean swarts</td>
                                      <td>
                                        <span style={{background: "#F1FAFF"}}>in progress</span>
                                      </td>
                                      <td>
                                        <BiDotsVertical />
                                      </td>
                                    </tr>
                                  </tbody>
                                  <div className='tabsPaginationBox'>
                                    <span>200 results total</span>
                                    <div>
                                      <MdNavigateBefore />
                                      <MdNavigateNext />
                                    </div>
                                  </div>
                                </table>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </TabPanel>

              </Tabs>
          </div>
          </div>

       
        </div>
        {/* --------------------------------------- */}


      </div>
    </>
  )
}

export default MemberDetails
