import React, { useState } from 'react'
import "./assets/css/clientType.css"
import { GrClose } from 'react-icons/gr';
import Corporate from '../modal/assets/images/Corporate.avi.png'
import { useSelector, useDispatch } from 'react-redux';
import { ClientTypes,AddClientFun } from '../../redux/slice/modalSlice';

function ClientType() {
    const dispatch = useDispatch();

    return (
        <>
            <div className="clientstypemodal">
                <div className="clientstypeinnermodal">
                    <GrClose className='ClientcloseIcon' onClick={() => dispatch(ClientTypes())} />
                    <h4 className='head'> Client Type </h4>
                    <div className="PersonalClients mt-5">
                        <img src={Personal} alt="" />
                        <input type="file" />
                        <span>
                            <h5> Personal Client </h5>
                            <p>Client with social number (SIN)</p>
                        </span>

                    </div>
                    <div className="PersonalClients mt-4">
                        <img src={Corporate} alt="" />
                        <span>
                            <h5> Corporate Client </h5>
                            <p> Client with Business number (BN)</p>
                        </span>
                    </div>
                    <button onClick={() => {
                        dispatch(AddClientFun())
                        dispatch(ClientTypes())
                    }}>Continue</button>
                </div>
            </div>
        </>

    )
}

export default ClientType;