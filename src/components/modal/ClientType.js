import React from 'react'
import "./assets/css/clientType.css"
import { GrClose } from 'react-icons/gr';
import Corporate from '../modal/assets/images/Corporate.avi.png'



function ClientType() {
    return (
        <>
            <div className="clientstypemodal">
                <div className="clientstypeinnermodal">
                    <GrClose className='ClientcloseIcon' />
                    <h4 className='head'> Client Type </h4>
                    <div className="PersonalClients mt-5">
                        <img src={Corporate} alt="" />
                        <input type="file" />
                        <span>
                            <h5> Personal Client </h5>
                            <p>Client with social number ( SIN )</p>
                        </span>

                    </div>
                    <div className="PersonalClients mt-4">
                        <img src={Corporate} alt="" />
                        <span>
                            <h5> Corporate Client </h5>
                            <p> Client with Business number ( BN )</p>
                        </span>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </>

    )
}

export default ClientType;