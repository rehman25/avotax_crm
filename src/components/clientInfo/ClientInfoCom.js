import React, { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux';
import './clientInfotable.css'
import ClientType from '../modal/ClientType'
import AddClientModal from '../modal/ClientModals/AddClient'
const ClientInfoCom = () => {
    const isClientType = useSelector((state) => state.ModalSlice.ClientTypeModal);
    const isAddClient = useSelector((state) => state.ModalSlice.AddClientModal);


    return (
        <>
            <div className="ClientInfoMain">
                <div className='CItable'>
                <table className="table align-middle mb-0 bg-white">
                    <thead ct assName="bg-light">
                        <tr className='CitTR'>
                            <th><input type="Checkbox" name="" id="" className='cittext' /></th>
                            <th><p className='cittext'>Client Code</p></th>
                            <th><p className='cittext'>Client</p></th>
                            <th><p className='cittext'>Key Contact</p></th>
                            <th><p className='cittext'>Partner</p></th>
                            <th><p className='cittext'>Manager</p></th>
                            <th><p className='cittext'>Email</p></th>
                            <th><p className='cittext'>Phone</p></th>
                            <th><p className='cittext'>Action</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='clientinfotabletext' s>
                                    <input type="checkbox" name="" id="" />
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>1001</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    10429244 Canada Inc
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>
                                    Paul Wolff
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext' >
                                    Justin Joy
                                </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Corinne </p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                            </td>
                            <td>
                                <p className='clientinfotabletext'>613-727-6020</p>
                            </td>
                            <td>
                                <p className='CITICOtext'>
                                    <span className='CITICo'>
                                        <BsEye className='eyeico' />
                                    </span>
                                    <span className='CITICo'>
                                        <MdOutlineModeEditOutline className='editico' />
                                    </span>
                                    <span className='CITICo'>
                                        <RiDeleteBin5Line className='deteleico' />
                                    </span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="row p-2 PaginationRow">
                    <div className="col-lg-6">
                        <span className='CitotalPage'>
                            10/Page
                        </span>
                    </div>
                    <div className="col-lg-6">
                        <div className='cipagination'>
                            <span>1-10 of 100 items</span>
                            <span className='cipgnos'><MdOutlineArrowBackIos className='pagesICo' /></span>
                            <span className='d-flex align-items-center'><p className='cipageno'>1</p><p className='cipagenodot'>...</p><p className='cipageno'>4</p><p className='cipageno'>5</p><p className='cipageno'>6</p><p className='cipageno'>7</p><p className='cipageno'>8</p><p className='cipagenodot'>...</p> </span>
                            <span><MdOutlineArrowForwardIos className='pagesICo' /></span>
                        </div>
                    </div>
                </div>
            </div>

            {isClientType && (
                <ClientType />
            )}
            {isAddClient && (
                <AddClientModal />
            )}
        </>
    )
}

export default ClientInfoCom