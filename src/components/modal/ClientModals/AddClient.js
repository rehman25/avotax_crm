import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { BsCheck } from 'react-icons/bs';
import '../../modal/assets/css/AddClient.css'
import { useSelector, useDispatch } from 'react-redux';
import { AddClientFun } from '../../../redux/slice/modalSlice';


function AddClient() {
  const dispatch = useDispatch();
  
  const [isFormSteps,setFormSteps] = useState("firstStep")
  const checkingForm = () => {
    if(isFormSteps == "firstStep"){
      setFormSteps("scdStep")
    }else if(isFormSteps == "scdStep"){
      setFormSteps("scdStep")
    }
  }

  return (
    <>
      <div className="addClientModal">
        <div className="inneraddClientModal">
          <div className="">
            <div className="customeRow">
              <h5> Add Cooperate Client </h5>
              <GrClose className="closeIcon" onClick={() => dispatch(AddClientFun())} />
            </div>
            <div className="row">
              <div className="col-4">
                <div className="clientStepsBox">

                  <div className="innerStep">
                    <span>
                      {isFormSteps == "firstStep" ? <p className="activeStep">1</p> : ""}
                      {isFormSteps == "scdStep" ? <p className="svgStep"><BsCheck className='svgStep'/></p>  : ""}
                    </span>
                    <div className="">
                      <h6>General Details</h6>
                      <p>Name,Email,Phone,Partner etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>2</p>
                    </span>
                    <div className="">
                      <h6>Other Info</h6>
                      <p>Address, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>3</p>
                    </span>
                    <div className="">
                      <h6>Client Details</h6>
                      <p>Website, Contact, Type, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>4</p>
                    </span>
                    <div className="">
                      <h6>Engagements</h6>
                      <p>HST, T1, T2, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>5</p>
                    </span>
                    <div className="">
                      <h6>Accounting Software</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                  <div className="innerStep">
                    <span>
                      <p>6</p>
                    </span>
                    <div className="">
                      <h6>Accounting Software</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                  <div className="innerStep">
                    <span>
                      <p>7</p>
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
                          <input type="email" class="form-control" placeholder="" required/>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Code <span>(Prefilled)</span></label>
                          <input type="email" class="form-control" placeholder="" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Name</label>
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
                          <label for="exampleInputEmail1">Solutionsp <span>*</span></label>
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
                        <div className="Generalinforowdirst">
                          <h5>dklejcfhgk</h5>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Entity <span>(Prefilled)</span></label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Code <span>(Prefilled)</span></label>
                            <input type="email" class="form-control" placeholder="" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
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
                            <label for="exampleInputEmail1">Solutionsp <span>*</span></label>
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
                    </form> : ""
                    }
                </div>
              </div>
            </div>
            <div className="Cooperatefooter">
              <span className="back">Back</span>
              <div>
              <span className="cancel">Cancel</span>
              <span className="next" onClick={checkingForm}>Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient
