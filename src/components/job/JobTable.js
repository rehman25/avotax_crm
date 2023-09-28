import React from 'react'
import { BsEye } from 'react-icons/bs'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import './JobTable.css'
import { useSelector, useDispatch } from 'react-redux';
import AddJobs from "../../components/modal/AddJob";


const JobTable = () => {
    const isJobModal = useSelector((state) => state.ModalSlice.CreateJobModal);

    return (
        <>
            <div className="JobMain">
                <div className='Jobtable'>
                    <table className="table">
                        <thead>
                            <tr className='JobtTR'>
                                <th><input type="Checkbox" name="" id="" className='jobtext'/></th>
                                <th><p className='jobtext'>Job ID</p></th>
                                <th><p className='jobtext'>Job Type</p></th>
                                <th><p className='jobtext'>Period Endend</p></th>
                                <th><p className='jobtext'>Client</p></th>
                                <th><p className='jobtext'>Key Contact</p></th>
                                <th><p className='jobtext'>Hrs. Worked</p></th>
                                <th><p className='jobtext'>Hrs. Allocated</p></th>
                                <th><p className='jobtext'>Hrs. To go</p></th>
                                <th><p className='jobtext'>Target End Date</p></th>
                                <th><p className='jobtext'>Job Status</p></th>
                                <th><p className='jobtext'>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='Jobtabletext' s>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1001</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        T1
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>
                                        Sep 01 2023
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        10429244 Canada Inc...
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        Paul Wolff
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext' >
                                        1.0000
                                    </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='Jobtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='Jobtabletext Processtext'>In Process</p>
                                </td>
                                <td>
                                    <p className='Jobtext'>
                                        <span className='JobICo'>
                                            <BsEye className='Jobeyeico' />
                                        </span>
                                        <span className='JobICo'>
                                            <MdOutlineModeEditOutline className='Jobeditico' />
                                        </span>
                                        <span className='JobICo'>
                                            <RiDeleteBin5Line className='Jobdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="row p-2 JobPaginationRow">
                    <div className="col-lg-6">
                        <span className='JobtotalPage'>
                            10/Page
                        </span>
                    </div>
                    <div className="col-lg-6">
                        <div className='Jobpagination'>
                            <span>1-10 of 100 items</span>
                            <span className='Jobpgnos'><MdOutlineArrowBackIos className='JobpagesICo' /></span>
                            <span className='d-flex align-items-center'><p className='Jobpageno'>1</p><p className='Jobpagenodot'>...</p><p className='Jobpageno'>4</p><p className='Jobpageno'>5</p><p className='Jobpageno'>6</p><p className='Jobpageno'>7</p><p className='Jobpageno'>8</p><p className='Jobpagenodot'>...</p> </span>
                            <span><MdOutlineArrowForwardIos className='JobpagesICo' /></span>
                        </div>
                    </div>
                </div>
            </div>
            {isJobModal && (
                <AddJobs />
            )}
        </>

    )
}

export default JobTable