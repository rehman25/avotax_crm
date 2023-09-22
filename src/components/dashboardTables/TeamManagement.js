import React from 'react'
import './assets/css/TeamManagement.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import TeamManagementChart from './charts/TeamManagementChart'  

const TeamManagement = () => {
  return (
      <div className='TmParentContainer'>
          <div className='TmTop'>
              <span>
                  <p className='Head'>Team Management</p>
                  <p>Avg. Allocated Rate 70.30%</p>
              </span>
          </div>
          <div className='TmBottom'>
              <table className="table align-middle mb-0 bg-white">
                  <thead ct assName="bg-light">
                      <tr>
                          <th>Name</th>
                          <th>Conv.</th>
                          <th>Chart</th>
                          <th>View</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td> 
                            <div className="d-flex align-items-center">
                                  <img
                                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                      alt=""
                                    //   style="width: 45px; height: 45px"
                                      className="rounded-circle TmTableImg"
                                  />
                                  <div className="ms-3">
                                      <p className="TmTableHead mb-1">John Doe</p>
                                      <p className="TmTablepara mb-0">john</p>
                                  </div>
                              </div>
                          </td>
                          <td>
                              <p className="TableText">55%</p>
                          </td>
                          <td>
                              <p className="TableText">
                                  <TeamManagementChart/>
                              </p>
                          </td>
                          <td>
                              <p className="TableIcon">
                                  <BsThreeDotsVertical />
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div className="d-flex align-items-center">
                                  <img
                                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                      alt=""
                                      //   style="width: 45px; height: 45px"
                                      className="rounded-circle TmTableImg"
                                  />
                                  <div className="ms-3">
                                      <p className="TmTableHead mb-1">John Doe</p>
                                      <p className="TmTablepara mb-0">john</p>
                                  </div>
                              </div>
                          </td>
                          <td>
                              <p className="TableText">55%</p>
                          </td>
                          <td>
                              <p className="TableText">
                                  <TeamManagementChart />
                              </p>
                          </td>
                          <td>
                              <p className="TableIcon">
                                  <BsThreeDotsVertical />
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div className="d-flex align-items-center">
                                  <img
                                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                      alt=""
                                      //   style="width: 45px; height: 45px"
                                      className="rounded-circle TmTableImg"
                                  />
                                  <div className="ms-3">
                                      <p className="TmTableHead mb-1">John Doe</p>
                                      <p className="TmTablepara mb-0">john</p>
                                  </div>
                              </div>
                          </td>
                          <td>
                              <p className="TableText">55%</p>
                          </td>
                          <td>
                              <p className="TableText">
                                  <TeamManagementChart />

                              </p>
                          </td>
                          <td>
                              <p className="TableIcon">
                                  <BsThreeDotsVertical />
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div className="d-flex align-items-center">
                                  <img
                                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                      alt=""
                                      //   style="width: 45px; height: 45px"
                                      className="rounded-circle TmTableImg"
                                  />
                                  <div className="ms-3">
                                      <p className="TmTableHead mb-1">John Doe</p>
                                      <p className="TmTablepara mb-0">john</p>
                                  </div>
                              </div>
                          </td>
                          <td>
                              <p className="TableText">55%</p>
                          </td>
                          <td>
                              <p className="TableText">
                                  <TeamManagementChart/>
                                
                              </p>
                          </td>
                          <td>
                              <p className="TableIcon">
                                  <BsThreeDotsVertical />
                              </p>
                          </td>
                      </tr>
                      
    
                  </tbody>
              </table>
          </div>

      </div>
  )
}

export default TeamManagement