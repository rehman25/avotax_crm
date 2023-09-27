import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { BsCheck } from 'react-icons/bs';
import '../../modal/assets/css/AddClient.css'
import { useSelector, useDispatch } from 'react-redux';
import { AddClientFun } from '../../../redux/slice/modalSlice';


function AddClient() {
  const dispatch = useDispatch();
  const [isFormSteps, setFormSteps] = useState("firstStep")

  const NextFun = (e) => {
    e.preventDefault()
    if(isFormSteps == "firstStep"){
      setFormSteps("scdStep")
    } else if (isFormSteps == "scdStep") {
      setFormSteps("thirdSteps")
    } else if (isFormSteps == "thirdSteps") {
      setFormSteps("forStep")
    } else if (isFormSteps == "forStep") {
      setFormSteps("fiveStep")
    } else if (isFormSteps == "fiveStep") {
      setFormSteps("sixStep")
    } else if (isFormSteps == "sixStep") {
      setFormSteps("sevenStep")
    }
  }

  const BackFun = () => {
    if (isFormSteps == "scdStep") {
      setFormSteps("firstStep")
    } else if (isFormSteps == "thirdSteps") {
      setFormSteps("scdStep")
    } else if (isFormSteps == "forStep") {
      setFormSteps("thirdSteps")
    } else if (isFormSteps == "fiveStep") {
      setFormSteps("forStep")
    } else if (isFormSteps == "sixStep") {
      setFormSteps("fiveStep")
    } else if (isFormSteps == "sevenStep") {
      setFormSteps("sixStep")
    }
  }

  return (
    <>
    <form onSubmit={NextFun}>
      <div className="addClientModal">
        <div className="inneraddClientModal">
          <div className="">
            <div className="customeRow">
              <h5> Add Cooperate Client </h5>
              <GrClose className="closeIcon" onClick={() => {
                dispatch(AddClientFun())
                setFormSteps("firstStep")
              }} />
            </div>
            <div className="row">
              <div className="col-lg-4 d-lg-block d-none">
                <div className="clientStepsBox">

                  <div className="innerStep">
                    <span className='after'>
                      {isFormSteps == "firstStep" ?
                        <p className="activeStep">1</p> : ""}
                        {
                          isFormSteps == "scdStep" || isFormSteps == "thirdSteps"
                          || isFormSteps == "forStep" || isFormSteps == "fiveStep"
                          || isFormSteps == "sixStep" || isFormSteps == "sevenStep" ?
                          <p className="svgStep"><BsCheck className='svgStep' /></p> : ""
                        }
                    </span>
                    <div className="">
                      <h6>General Details</h6>
                      <p>Name,Email,Phone,Partner etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span className='after'>
                      {isFormSteps == "scdStep" ?
                        <p className="activeStep">2</p> :
                        isFormSteps == "thirdSteps" || isFormSteps == "forStep" ||
                          isFormSteps == "fiveStep" || isFormSteps == "sixStep" || isFormSteps == "sevenStep" ? false : <p className="">2</p>}

                      {isFormSteps == "thirdSteps" || isFormSteps == "forStep" || isFormSteps == "fiveStep"
                        || isFormSteps == "sixStep" || isFormSteps == "sevenStep" ?
                        <p className="svgStep"><BsCheck className='svgStep' /></p> : ""}
                    </span>
                    <div className="">
                      <h6>Other Info</h6>
                      <p>Address, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span className='after'>
                      {isFormSteps == "thirdSteps" ?
                        <p className="activeStep">3</p> :
                        isFormSteps == "forStep" || isFormSteps == "fiveStep"
                          || isFormSteps == "sixStep" || isFormSteps == "sevenStep" ? false : <p className="">3</p>}

                      {isFormSteps == "forStep" || isFormSteps == "fiveStep"
                        || isFormSteps == "sixStep" || isFormSteps == "sevenStep" ?
                        <p className="svgStep"><BsCheck className='svgStep' /></p> : ""}
                    </span>
                    <div className="">
                      <h6>Client Details</h6>
                      <p>Website, Contact, Type, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span className='after'>
                      {isFormSteps == "forStep" ?
                        <p className="activeStep">4</p> :
                        isFormSteps == "fiveStep" || isFormSteps == "sixStep" || isFormSteps == "sevenStep" ? false : <p className="">4</p>}

                      {isFormSteps == "fiveStep" || isFormSteps == "sixStep" || isFormSteps == "sevenStep" ?
                        <p className="svgStep"><BsCheck className='svgStep' /></p> : ""}
                    </span>
                    <div className="">
                      <h6>Engagements</h6>
                      <p>HST, T1, T2, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span className='after'>
                      {isFormSteps == "fiveStep" ?
                        <p className="activeStep">5</p> :
                        isFormSteps == "sixStep" || isFormSteps == "sevenStep" ? false : <p className="">5</p>}

                      {isFormSteps == "sixStep" || isFormSteps == "sevenStep" ?
                        <p className="svgStep"><BsCheck className='svgStep' /></p> : ""}
                    </span>
                    <div className="">
                      <h6>Accounting Software</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                  <div className="innerStep">
                    <span className='after'>
                      {isFormSteps == "sixStep" ?
                        <p className="activeStep">6</p> : isFormSteps == "sevenStep" ? false : <p className="">6</p>}

                      {isFormSteps == "sevenStep" ?
                        <p className="svgStep"><BsCheck className='svgStep' /></p> : ""}
                    </span>
                    <div className="">
                      <h6>Accounting Software</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                  <div className="innerStep">
                    <span>
                      {isFormSteps == "sevenStep" ?
                        <p className="activeStep">7</p> :
                        isFormSteps == "firstStep" || isFormSteps == "scdStep" ||
                          isFormSteps == "thirdSteps" || isFormSteps == "forStep" ||
                          isFormSteps == "fiveStep" || isFormSteps == "sixStep" ? <p className="">7</p> : false}
                    </span>
                    <div className="">
                      <h6>Accounting Software</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-8">
                <div className="CooperateClients">
                  {isFormSteps == "firstStep" ?
                    <>
                      <div className="Generalinforowdirst">
                        <h5>General Information</h5>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Entity <span>(Prefilled)</span></label>
                          <input type="email" className="form-control" placeholder=""  />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Code <span>(Prefilled)</span></label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Name <span>*</span></label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Generalinforowsecond">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Business Number</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Mailing Name <span>*</span></label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Salution <span>*</span></label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Generalinforowthird">
                        <div className="form-group">
                          <label for="exampleFormControlSelect1">Contact Type <span>*</span></label>
                          <select className="form-select" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleFormControlSelect1">Communication Language <span>*</span></label>
                          <select className="form-select" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="Assignedto">
                        <h5>Assigned To</h5>
                        <div className="form-group">
                          <label for="exampleFormControlSelect1">Partner</label>
                          <select className="form-select" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleFormControlSelect1">Manager</label>
                          <select className="form-select" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="ContactinforowFirst">
                        <h5>Contact Information</h5>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Work Phone</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Mobile</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Skype</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Contactinforowsecond">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Home Phone</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Fax</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Twitter</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                    </> :
                    isFormSteps == "scdStep" ?
                    <>
                      <div className="Addressrowdirst">
                        <h5>Address</h5>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Address</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Number</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Apt</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Addressrowsecond">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Street</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">PO BOX</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">RR</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Addressrowthird">
                        <div className="form-group">
                          <label for="exampleInputEmail1">City/Town</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleFormControlSelect1">Province</label>
                          <select className="form-select" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Postal Code</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Seccontactrowfirst">
                        <h5> Secondary Contact </h5>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Name</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">SIN</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Date of Birth</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Seccontactrowsecond">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Position/Relationship</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email Address</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Phone Number</label>
                          <input type="email" className="form-control" placeholder="" />
                        </div>
                      </div>
                    </> :
                    isFormSteps == "thirdSteps" ?
                      <>
                        <div className="Internetrowfirst">
                          <h5>Internet</h5>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Linkedin</label>
                            <input type="email" className="form-control" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Website</label>
                            <input type="email" className="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="Internetrowsecond">
                          <h5>Consents</h5>
                          <div className="form-group">
                            <label for="exampleFormControlSelect1">Has the client signed T1013?</label>
                            <select className="form-select" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label for="exampleFormControlSelect1">Has the client signed RC59?</label>
                            <select className="form-select" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="Internetrowthird">
                          <h5>General</h5>
                          <div className="form-group">
                            <label for="exampleFormControlSelect1">Is this a new client?</label>
                            <select className="form-select" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label for="exampleFormControlSelect1">GST/HST BN?</label>
                            <select className="form-select" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Client Wi-Fi Password</label>
                            <input type="email" className="form-control" placeholder="" />
                          </div>
                        </div>
                      </> :
                    isFormSteps == "forStep" ?
                        <>
                          <div className="Engagementsrowfirst">
                            <h5>Engagements</h5>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we do client HST return?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we do payroll for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we prepare T1 returns for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="Engagementsrowsecond">
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we prepare T2 returns for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we prepare T3 returns for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we prepare T4 returns for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="Engagementsrowthird">
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we prepare T5 returns for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we prepare T5018's returns for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Do we do bookkeeping for this client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="Engagementsrowfourth">
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">GST/HST Filling?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">GST/HST Method?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Has GST return been e-filed?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="Engagementsrowfifth">
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Has T1 been e-filed?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Has T1135 been e-filed?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Has T2 been e-filed?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                          <div className="Engagementsrowsixth">
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">Is this a review client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlSelect1">is this a audit client?</label>
                              <select className="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                          </div>
                        </> :
                  isFormSteps == "fiveStep" ?
                          <>
                            <div className="Accountsoftrow">
                              <h5>Accounting Software</h5>
                              <div className="form-group">
                                <label for="exampleFormControlSelect1">Accounting Software</label>
                                <select className="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                            </div>
                            <div className="Bussinessaffilaiterowfirst">
                              <h5>Business Affiliates</h5>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Bookkeeper name</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Bookkeeper phone number</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Bookkeeper e-mail</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                            </div>
                            <div className="Bussinessaffilaiterowsecond">
                              <h5>Business Affiliates</h5>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Lawyer name</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Lawyer phone number</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                              <div className="form-group">
                                <label for="exampleInputEmail1">Lawyer e-mail address</label>
                                <input type="email" className="form-control" placeholder="" />
                              </div>
                            </div>

                          </> :
                          isFormSteps == "sixStep" ?
                            <>
                              <div className="Profierowfirst">
                                <h5> More about the Contact </h5>
                                <div className="form-group">
                                  <label for="exampleFormControlSelect1">Tax Year End</label>
                                  <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label for="exampleFormControlSelect1">Client Type</label>
                                  <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label for="exampleFormControlSelect1">Client Type Subcategory</label>
                                  <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="Profierowsecond">
                                <div className="form-group">
                                  <label for="exampleFormControlSelect1">No. of Employees</label>
                                  <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label for="exampleFormControlSelect1">In business since</label>
                                  <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="Annualaccschedule">
                                <h5> Annual Account Scheduling </h5>
                                <div className="form-group">
                                  <label for="exampleFormControlSelect1">Annual Account Month</label>
                                  <select className="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="clienthistory">
                                <h5> Client History </h5>
                                <div className="form-group">
                                  <label for="exampleInputEmail1">Client From</label>
                                  <input type="email" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                  <label for="exampleInputEmail1">Client Until</label>
                                  <input type="email" className="form-control" placeholder="" />
                                </div>
                              </div>
                            </> :
                            isFormSteps == "sevenStep" ?
                              <>
                                <div className="Billingrowfirst">
                                  <h5>Billing</h5>
                                  <div className="form-group">
                                    <label for="exampleFormControlSelect1">Invoice/Statement Delivery</label>
                                    <select className="form-select" id="exampleFormControlSelect1">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label for="exampleFormControlSelect1">Charge Interest</label>
                                    <select className="form-select" id="exampleFormControlSelect1">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <label for="exampleInputEmail1">Interest Rate %</label>
                                    <input type="email" className="form-control" placeholder="" />
                                  </div>
                                </div>
                                <div className="Billingrowsecond">
                                  <div className="form-group">
                                    <label for="exampleInputEmail1">Interest Period</label>
                                    <input type="email" className="form-control" placeholder="" />
                                  </div>
                                  <div className="form-group">
                                    <label for="exampleInputEmail1">Minimum Amount</label>
                                    <input type="email" className="form-control" placeholder="" />
                                  </div>
                                  <div className="form-group">
                                    <label for="exampleFormControlSelect1">Send Invoice Reminder</label>
                                    <select className="form-select" id="exampleFormControlSelect1">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="Billingrowthird">
                                  <div className="form-group">
                                    <label for="exampleFormControlSelect1">Tax rate</label>
                                    <select className="form-select" id="exampleFormControlSelect1">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                </div>
                              </> : ""
                  }
                </div>
              </div>
            </div>
            <div className="Cooperatefooter">
              <span className="back" onClick={BackFun}>Back</span>
              <div>
                <span className="cancel" onClick={() => {
                dispatch(AddClientFun())
                setFormSteps("firstStep")
              }}>Cancel</span>
                {
                  isFormSteps == "firstStep" || isFormSteps == "scdStep"
                    || isFormSteps == "thirdSteps" || isFormSteps == "forStep"
                    || isFormSteps == "fiveStep" || isFormSteps == "sixStep" ?
                    <button className="next" type="sumbit">Next</button> : isFormSteps == "sevenStep" ? <button className="save">Save</button> : false
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default AddClient
