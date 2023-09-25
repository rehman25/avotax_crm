import React, { useState } from 'react'
import './Assets/css/AddUserForm.css'
import { GrClose } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { CreateUserFun } from '../../redux/slice/modalSlice';
import { Checkbox } from '@mui/material';
import { BsFillImageFill } from 'react-icons/bs'
import { RxClipboardCopy } from 'react-icons/rx'
import { BiCross } from 'react-icons/bi'


const AddUserModal = (props) => {
    const dispatch = useDispatch();

    const [isFormSteps, setFormSteps] = useState("firstStep")

    const checkingForm = () => {
        if (isFormSteps == "firstStep") {
            setFormSteps("scdStep")
        } else if (isFormSteps == "scdStep") {
            setFormSteps("ThrdStep")
        } else if (isFormSteps == "ThrdStep") {
            setFormSteps("forthStep")
        }
    }

    return (
        <div className="addUserModal">
            <div className="inneraddUserModal">
                <div className="">
                    <div className="AddusercustomeRow">
                        <h5>Add User</h5>
                        <GrClose onClick={() => dispatch(CreateUserFun())} />
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="AddUserStepsBox">

                                <div className="innerStep">
                                    <span>
                                        <p>1</p>
                                    </span>
                                    <div className="">
                                        <h6>General Details</h6>
                                        <p>Name,Email,Phone,partner,etc</p>
                                    </div>
                                </div>
                                <div className="innerStep">
                                    <span>
                                        <p>2</p>
                                    </span>
                                    <div className="">
                                        <h6>Profile</h6>
                                        <p>Name,Email,Phone</p>
                                    </div>
                                </div>
                                <div className="innerStep">
                                    <span>
                                        <p>3</p>
                                    </span>
                                    <div className="">
                                        <h6>Licenses</h6>
                                        <p>Name,Email,Phone</p>
                                    </div>
                                </div>
                                <div className="innerStep">
                                    <span>
                                        <p>4</p>
                                    </span>
                                    <div className="">
                                        <h6>Security</h6>
                                        <p>Name,Email,Phone</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-8">
                            {isFormSteps == 'firstStep' ?
                                <div className='AddUserResp'>
                                    <form action="">
                                        <div className='firstStepHeading'>
                                            <h5>Details</h5>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel' >User Name</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>First Name</label>
                                                        <input type="Email" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>Last Name</label>
                                                        <select name="" id="" className='form-select'>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>Email Address</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>Defualt Number Of Items</label>
                                                        <select name="" id="" className='form-select'>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>Defualt Report Tab</label>
                                                        <select name="" id="" className='form-select'>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>Date Format on Screen</label>
                                                        <input type="text" name="" id="" className='form-control' />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>Contact sort Order & Navigtion</label>
                                                        <select name="" id="" className='form-select'>
                                                            <option value=""></option>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="" className='createUserFormLabel'>Timesheet Entry</label>
                                                        <select name="" id="" className='form-select'>
                                                            <option value=""></option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='firstStepHeading'>
                                            <h5>
                                                Allow Functionality
                                            </h5>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form-group Functionality">
                                                        <input type="checkbox" className='form-check mx-2' name="" id="" />
                                                        <label htmlFor="" className='createUserFormLabel'>Display name is parttner field</label>
                                                    </div>
                                                    <div className="form-group Functionality">
                                                        <input type="checkbox" className='form-check mx-2' name="" id="" />
                                                        <label htmlFor="" className='createUserFormLabel'>Track Efficiency For User</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group Functionality">
                                                        <input type="checkbox" className='form-check mx-2' name="" id="" />
                                                        <label htmlFor="" className='createUserFormLabel'>Display name  is manager field</label>
                                                    </div>
                                                    <div className="form-group Functionality">
                                                        <input type="checkbox" className='form-check mx-2' name="" id="" />
                                                        <label htmlFor="" className='createUserFormLabel'>Use Advanced HTML Editor</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group Functionality">
                                                        <input type="checkbox" className='form-check mx-2' name="" id="" />
                                                        <label htmlFor="" className='createUserFormLabel'>Display user in capacity Planning</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>

                                </div> :
                                isFormSteps == 'scdStep' ?
                                    <div className='AddUserResp'>
                                        <form action="">
                                            <div className='firstStepHeading'>
                                                <h5>Profile</h5>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel' >User Name</label>
                                                            <input type="text" name="" id="" className='form-control' />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>First Name</label>
                                                            <input type="Email" name="" id="" className='form-control' />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>Last Name</label>
                                                            <select name="" id="" className='form-select'>
                                                                <option value=""></option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>Email Address</label>
                                                            <input type="text" name="" id="" className='form-control' />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>Defualt Number Of Items</label>
                                                            <select name="" id="" className='form-select'>
                                                                <option value=""></option>
                                                                <option value=""></option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>Defualt Report Tab</label>
                                                            <select name="" id="" className='form-select'>
                                                                <option value=""></option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>Date Format on Screen</label>
                                                            <input type="text" name="" id="" className='form-control' />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>Contact sort Order & Navigtion</label>
                                                            <select name="" id="" className='form-select'>
                                                                <option value=""></option>
                                                                <option value=""></option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="" className='createUserFormLabel'>Timesheet Entry</label>
                                                            <select name="" id="" className='form-select'>
                                                                <option value=""></option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='firstStepHeading'>
                                                <h5>
                                                    Others
                                                </h5>
                                                <div className="row">
                                                    <div className="col-lg-5">
                                                        <div className="form-group others">
                                                            <label htmlFor="" className='createUserFormLabel'>Display name is parttner field</label>
                                                            <div className='form-control FileUpload'>
                                                                <BsFillImageFill className='uploadPicLogo' />
                                                                <span className='filesbox'>
                                                                    <p className='uploadhead1'>Drop files here or  Click to Upload </p>
                                                                    <p className='uploadhead2'>Upload upto 5mb file </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="form-group others">
                                                            <label htmlFor="" className='createUserFormLabel'>Display name  is manager field</label>
                                                            <textarea name="" id="" cols="25" rows="10" className='form-control textarea'></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    : isFormSteps == 'ThrdStep' ?
                                        <div className='AddUserResp'>
                                            <form action="">
                                                <div className='firstStepHeading'>
                                                    <div className="row">
                                                        <div className="col-lg-5 Availiable">
                                                           <h6>Availiable</h6>
                                                          <div className='licenseBox'>
                                                                <RxClipboardCopy className='boardClipIcon' />
                                                                <p>Capacity Planning(4)</p>
                                                                <BiCross className='boardClipIcon' />
                                                          </div>
                                                            <div className='licenseBox'>
                                                                <RxClipboardCopy className='boardClipIcon' />
                                                                <p>Capacity Planning(4)</p>
                                                                <BiCross className='boardClipIcon' />
                                                            </div>
                                                            <div className='licenseBox'>
                                                                <RxClipboardCopy className='boardClipIcon' />
                                                                <p>Capacity Planning(4)</p>
                                                                <BiCross className='boardClipIcon' />
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-5 Availiable">
                                                            <h6>Availiable</h6>
                                                            <div className='licenseBox'>
                                                                <RxClipboardCopy className='boardClipIcon' />
                                                                <p>Capacity Planning(4)</p>
                                                                <BiCross className='boardClipIcon' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        : isFormSteps == 'forthStep' ?
                                            <div className='AddUserResp'>
                                                <form action="">
                                                    <div className='firstStepHeading'>
                                                        <div className="row">
                                                            <div className="col-lg-5 Availiable">
                                                                <h6>44</h6>
                                                                <div className='licenseBox'>
                                                                    <RxClipboardCopy className='boardClipIcon' />
                                                                    <p>Capacity Planning(4)</p>
                                                                    <BiCross className='boardClipIcon' />
                                                                </div>
                                                                <div className='licenseBox'>
                                                                    <RxClipboardCopy className='boardClipIcon' />
                                                                    <p>Capacity Planning(4)</p>
                                                                    <BiCross className='boardClipIcon' />
                                                                </div>
                                                                <div className='licenseBox'>
                                                                    <RxClipboardCopy className='boardClipIcon' />
                                                                    <p>Capacity Planning(4)</p>
                                                                    <BiCross className='boardClipIcon' />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-5 Availiable">
                                                                <h6>Availiable</h6>
                                                                <div className='licenseBox'>
                                                                    <RxClipboardCopy className='boardClipIcon' />
                                                                    <p>Capacity Planning(4)</p>
                                                                    <BiCross className='boardClipIcon' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div> : ""
                            }

                        </div>
                        <div className="col-12">
                            <div className='AddUserModalBottom'>
                                <button className='AddUserCancelButton' onClick={() => dispatch(CreateUserFun())}>Cancel</button>
                                <button className='AddUserNextButton' onClick={checkingForm}>Next</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddUserModal