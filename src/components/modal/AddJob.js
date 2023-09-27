import React from 'react'
import "./assets/css/addJob.css";
import { GrClose } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { CreateJobFun } from '../../redux/slice/modalSlice';



function AddJob() {
    const dispatch = useDispatch();

    return (
        <>
            <div className="addjobmodal">
                <div className="addjobmodalInnerBox">
                    <h4> Add Job </h4>
                    <GrClose className='Iconclose' onClick={() => dispatch(CreateJobFun())}/>
                    <form action="">
                        <div className="ScrollBar">
                            <div className="form-group mt-3 px-3">
                                <label> Client <span>*</span></label>
                                <textarea className="form-control" ></textarea>
                            </div>
                            <div className="formAlign pt-4">
                                <div className="form-group">
                                    <label for="">Job Type</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label> Period Ended <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>

                            <div className="formAlign">
                                <div className="form-group">
                                    <label for="">Job Partner</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="">Job Manager</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="formAlign">
                                <div className="form-group">
                                    <label for="">Job Owner</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="">Currently Responsible</label>
                                    <select  className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="formAlign">
                                <div className="form-group">
                                    <label> Target Start Date  <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label> Target End Date <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="formAlign">
                            <div className="form-group">
                                    <label for="">Job Status</label>
                                    <select  className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="">Priority</label>
                                    <select  className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mt-3 px-3">
                                <label> Job Details <span>*</span></label>
                                <textarea className="form-control" ></textarea>
                            </div>
                            <div className="form-group mt-3 px-3">
                                <label> Opening WIP Description <span>*</span></label>
                                <textarea className="form-control" ></textarea>
                            </div>
                            <div className="formAlign">
                                <div className="form-group">
                                    <label> Opening WIP <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label> Agreed Free <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group mt-3 px-3">
                                <label> Budget Total <span>*</span></label>
                                <textarea className="form-control" ></textarea>
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

export default AddJob;