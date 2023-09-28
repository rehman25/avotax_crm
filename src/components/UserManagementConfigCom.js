import React from 'react'
import { BsEye } from 'react-icons/bs'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import TablePro from '../components/assets/images/TablepRO.webp'
import '../components/assets/css/UserManagementConfigCom.css'
import AddUserModal from '../components/stepperForm/AddUserModal'
import { useSelector, useDispatch } from 'react-redux';



const UserManagementConfigCom = () => {
    const addUser = useSelector((state) => state.ModalSlice.CreateUserModal);

    return (
        <>
            <div className="UMCCMain">
                <div className='UMCCtable'>
                    <table className="table">
                        <thead>
                            <tr className='UMCCtTR'>
                                <th><input type="Checkbox" name="" id="" className='UMCCtext' /></th>
                                <th><p className='UMCCtext'>Profile</p></th>
                                <th><p className='UMCCtext'>User Name</p></th>
                                <th><p className='UMCCtext'>Role</p></th>
                                <th><p className='UMCCtext'>Email</p></th>
                                <th><p className='UMCCtext'>Two-Step</p></th>
                                <th><p className='UMCCtext'>Join Date</p></th>
                                <th><p className='UMCCtext'>Phone</p></th>
                                <th><p className='UMCCtext'>Action</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p> 
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className='UMCCtabletext'>
                                        <input type="checkbox" name="" id="" />
                                    </p>
                                </td>
                                <td>
                                    <p> <img src={TablePro} alt="" className='UMCCPROIMG' /> </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        John Doe
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>
                                        Admin
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext' >
                                        Pwolff77@hotmail.com
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext enabeld' >
                                        Enabled
                                    </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>1.0000 </p>
                                </td>
                                <td>
                                    <p className='UMCCtabletext'>Sep 01 2023</p>
                                </td>
                                <td>
                                    <p className='UMCCtext'>
                                        <span className='UMCCICo'>
                                            <BsEye className='UMCCeyeico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <MdOutlineModeEditOutline className='UMCCeditico' />
                                        </span>
                                        <span className='UMCCICo'>
                                            <RiDeleteBin5Line className='UMCCdeteleico' />
                                        </span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row p-2 UMCCPaginationRow">
                    <div className="col-lg-6">
                        <span className='UMCCtotalPage'>
                            10/Page
                        </span>
                    </div>
                    <div className="col-lg-6">
                        <div className='UMCCpagination'>
                            <span>1-10 of 100 items</span>
                            <span className='UMCCpgnos'><MdOutlineArrowBackIos className='UMCCpagesICo' /></span>
                            <span className='d-flex align-items-center'><p className='UMCCpageno'>1</p><p className='UMCCpagenodot'>...</p><p className='UMCCpageno'>4</p><p className='UMCCpageno'>5</p><p className='UMCCpageno'>6</p><p className='UMCCpageno'>7</p><p className='UMCCpageno'>8</p><p className='UMCCpagenodot'>...</p> </span>
                            <span><MdOutlineArrowForwardIos className='UMCCpagesICo' /></span>
                        </div>
                    </div>
                </div>
            </div>
            {addUser && (
                <AddUserModal />
            )}
        </>

    )
}

export default UserManagementConfigCom