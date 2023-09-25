import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { BsCheck } from 'react-icons/bs';
import '../../modal/assets/css/AddClient.css'
import { useSelector, useDispatch } from 'react-redux';
import { AddClientFun } from '../../../redux/slice/modalSlice';


function AddClient() {
  const dispatch = useDispatch();
  const [isFormSteps, setFormSteps] = useState("firstStep")
  // const [isActiveSteps,setActiveSteps] = useState(false)

  const NextFun = () => {
    if (isFormSteps == "firstStep") {
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
              <div className="col-4">
                <div className="clientStepsBox">

                  <div className="innerStep">
                    <span>
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
                    <span>
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
                    <span>
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
                    <span>
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
                    <span>
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
                    <span>
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

                      {/* { isFormSteps == "sevenStep" ?  */}
                      {/* <p className="svgStep"><BsCheck className='svgStep' /></p> : ""} */}
                    </span>
                    <div className="">
                      <h6>Accounting Software</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-8">
                <div className="CooperateClients">
                  {isFormSteps == "firstStep" ?
                    <form action="">
                      <div className="Generalinforowdirst">
                        <h5>General Information</h5>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Entity <span>(Prefilled)</span></label>
                          <input type="email" class="form-control" placeholder="" required />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Code <span>(Prefilled)</span></label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Name <span>*</span></label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Generalinforowsecond">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Business Number</label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Mailing Name <span>*</span></label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Salution <span>*</span></label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Generalinforowthird">
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">Contact Type <span>*</span></label>
                          <select class="form-select" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">Communication Language <span>*</span></label>
                          <select class="form-select" id="exampleFormControlSelect1">
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
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">Partner</label>
                          <select class="form-select" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">Manager</label>
                          <select class="form-select" id="exampleFormControlSelect1">
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
                        <div class="form-group">
                          <label for="exampleInputEmail1">Work Phone</label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Mobile</label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Skype</label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                      </div>
                      <div className="Contactinforowsecond">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Home Phone</label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Fax</label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Twitter</label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                      </div>
                    </form> :
                    isFormSteps == "scdStep" ?
                      <form action="">
                        <div className="Addressrowdirst">
                          <h5>Address</h5>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Address</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Number</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Apt</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="Addressrowsecond">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Street</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">PO BOX</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">RR</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="Addressrowthird">
                          <div class="form-group">
                            <label for="exampleInputEmail1">City/Town</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">Province</label>
                            <select class="form-select" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Postal Code</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="Seccontactrowfirst">
                          <h5> Secondary Contact </h5>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">SIN</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Date of Birth</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                        </div>
                        <div className="Seccontactrowsecond">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Position/Relationship</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Email Address</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                        </div>
                      </form> :
                      isFormSteps == "thirdSteps" ?
                        <form action="">
                          <div className="Internetrowfirst">
                            <h5>Internet</h5>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Email</label>
                              <input type="email" class="form-control" placeholder="" />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Linkedin</label>
                              <input type="email" class="form-control" placeholder="" />
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Website</label>
                              <input type="email" class="form-control" placeholder="" />
                            </div>
                          </div>
                          <div className="Internetrowsecond">
                            <h5>Consents</h5>
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">Has the client signed T1013?</label>
                              <select class="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">Has the client signed RC59?</label>
                              <select class="form-select" id="exampleFormControlSelect1">
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
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">Is this a new client?</label>
                              <select class="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="exampleFormControlSelect1">GST/HST BN?</label>
                              <select class="form-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Client Wi-Fi Password</label>
                              <input type="email" class="form-control" placeholder="" />
                            </div>
                          </div>
                        </form> :
                        isFormSteps == "forStep" ?
                          <form action="">
                            <div className="Engagementsrowfirst">
                              <h5>Engagements</h5>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Do we do client HST return?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Do we do payroll for this client?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Has the client signed T1013?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="Engagementsrowsecond">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Has the client signed T1013?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Has the client signed RC59?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Has the client signed RC59?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="Engagementsrowthird">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Is this a new client?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="Engagementsrowfourth">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Is this a new client?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="Engagementsrowfifth">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Is this a new client?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                            <div className="Engagementsrowsixth">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">Is this a new client?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                <select class="form-select" id="exampleFormControlSelect1">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                              </div>
                            </div>
                          </form> :
                          isFormSteps == "fiveStep" ?
                            <form action="">
                              <div className="Internetrowfirst">
                                <h5>fiveStep</h5>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Email</label>
                                  <input type="email" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Linkedin</label>
                                  <input type="email" class="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Website</label>
                                  <input type="email" class="form-control" placeholder="" />
                                </div>
                              </div>
                              <div className="Internetrowsecond">
                                <h5>Consents</h5>
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">Has the client signed T1013?</label>
                                  <select class="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">Has the client signed RC59?</label>
                                  <select class="form-select" id="exampleFormControlSelect1">
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
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">Is this a new client?</label>
                                  <select class="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                  <select class="form-select" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputEmail1">Client Wi-Fi Password</label>
                                  <input type="email" class="form-control" placeholder="" />
                                </div>
                              </div>
                            </form> :
                            isFormSteps == "sixStep" ?
                              <form action="">
                                <div className="Internetrowfirst">
                                  <h5>Six</h5>
                                  <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" placeholder="" />
                                  </div>
                                  <div class="form-group">
                                    <label for="exampleInputEmail1">Linkedin</label>
                                    <input type="email" class="form-control" placeholder="" />
                                  </div>
                                  <div class="form-group">
                                    <label for="exampleInputEmail1">Website</label>
                                    <input type="email" class="form-control" placeholder="" />
                                  </div>
                                </div>
                                <div className="Internetrowsecond">
                                  <h5>Consents</h5>
                                  <div class="form-group">
                                    <label for="exampleFormControlSelect1">Has the client signed T1013?</label>
                                    <select class="form-select" id="exampleFormControlSelect1">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label for="exampleFormControlSelect1">Has the client signed RC59?</label>
                                    <select class="form-select" id="exampleFormControlSelect1">
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
                                  <div class="form-group">
                                    <label for="exampleFormControlSelect1">Is this a new client?</label>
                                    <select class="form-select" id="exampleFormControlSelect1">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                    <select class="form-select" id="exampleFormControlSelect1">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label for="exampleInputEmail1">Client Wi-Fi Password</label>
                                    <input type="email" class="form-control" placeholder="" />
                                  </div>
                                </div>
                              </form> :
                              isFormSteps == "sevenStep" ?
                                <form action="">
                                  <div className="Internetrowfirst">
                                    <h5>Seven</h5>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">Email</label>
                                      <input type="email" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">Linkedin</label>
                                      <input type="email" class="form-control" placeholder="" />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">Website</label>
                                      <input type="email" class="form-control" placeholder="" />
                                    </div>
                                  </div>
                                  <div className="Internetrowsecond">
                                    <h5>Consents</h5>
                                    <div class="form-group">
                                      <label for="exampleFormControlSelect1">Has the client signed T1013?</label>
                                      <select class="form-select" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                      </select>
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleFormControlSelect1">Has the client signed RC59?</label>
                                      <select class="form-select" id="exampleFormControlSelect1">
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
                                    <div class="form-group">
                                      <label for="exampleFormControlSelect1">Is this a new client?</label>
                                      <select class="form-select" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                      </select>
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleFormControlSelect1">GST/HST BN?</label>
                                      <select class="form-select" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                      </select>
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">Client Wi-Fi Password</label>
                                      <input type="email" class="form-control" placeholder="" />
                                    </div>
                                  </div>
                                </form> : ""
                  }


                </div>
              </div>
            </div>
            <div className="Cooperatefooter">
              <span className="back" onClick={BackFun}>Back</span>
              <div>
                <span className="cancel">Cancel</span>
                {
                  isFormSteps == "firstStep" || isFormSteps == "scdStep"
                    || isFormSteps == "thirdSteps" || isFormSteps == "forStep"
                    || isFormSteps == "fiveStep" || isFormSteps == "sixStep" ?
                    <span className="next" onClick={NextFun}>Next</span> : isFormSteps == "sevenStep" ? <button>Save</button> : false
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient
