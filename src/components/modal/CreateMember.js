import React from 'react'
import "./assets/css/createMember.css";
import profileIco from '../assets/images/porfileIIco.svg'
import { GrClose } from 'react-icons/gr';
function CreateMember(props) {
    return (
        <>
            <div className="createmembermodal">
                {/* <div className='layoutBox'> */}
                <div className="createmembermodalInnerBox">
                    <h4> Create Member </h4>
                    <p> Create a new member </p>
                    <GrClose className='formClsoeIco' onClick={() => { props?.setShowCreateMember(!props?.isShowCreateMember) }} />
                    <form action="">
                        <div className="formScrollBox">
                            <div className="formFlex pt-4">
                                <div className="form-group">
                                    <label> User Name <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label>Password<span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="formFlex">
                                <div className="form-group">
                                    <label> Name <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label> Company Name <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="formFlex">
                                <div className="form-group">
                                    <label> Email <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label> Phone <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="formFlex">
                                <div className="form-group">
                                    <label> Mobile <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label> City <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="formFlex">
                                <div className="form-group">
                                    <label> Country <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label> Postal Code <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group mt-3 px-3">
                                <label> Note <span>*</span></label>
                                <textarea className="form-control" ></textarea>
                            </div>
                            <div className="fileBox">
                                <div className="form-group mt-3 px-3">
                                    <label> Postal Code <span>*</span></label>
                                    <div className="fileInnerBox">
                                        <input type="file" />
                                        <img src={profileIco} alt="" />
                                        <div className="flexBoxxx">
                                            <h5>Drop files here on click to upload.</h5>
                                            <span>upload up to 5mb file</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button>Save</button>
                    </form>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default CreateMember;