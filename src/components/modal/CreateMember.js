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
                <GrClose className='formClsoeIco' onClick={()=> {props?.setShowCreateMember(!props?.isShowCreateMember)}}/>
                <form action="">
                    <div className="formScrollBox">
                        <div className="formFlex pt-4">
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                        </div>

                        <div className="formFlex">
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                        </div>

                        <div className="formFlex">
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                        </div>

                        <div className="formFlex">
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                        </div>

                        <div className="formFlex">
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Email address <span>*</span></label>
                                <input type="text" class="form-control"placeholder="Enter email" />
                            </div>
                        </div>
                        <div class="form-group mt-3 px-3">
                            <label>Email address <span>*</span></label>
                            <textarea class="form-control" ></textarea>
                        </div>
                        <div className="fileBox">
                            <div class="form-group mt-3 px-3">
                                <label>Email address <span>*</span></label>
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