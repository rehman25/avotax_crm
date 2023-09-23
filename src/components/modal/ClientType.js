import React from 'react'
import "./assets/css/clientType.css"
import { GrClose } from 'react-icons/gr';
import Corporate from '../modal/assets/images/Corporate.avi.png'



function ClientType() {
    return (
        <>
            <div className="clientstypemodal">
                <div className="clientstypeinnermodal">
                <GrClose className='ClientcloseIcon'/>
                    <h4> Client Type </h4>
                    <div className="PersonalClients">
                        <img src="" alt="" />
                        <span>
                            <h5> Personal Client </h5>
                            Client with social number ( SIN )
                        </span>

                    </div>
                    <div className="CorporateClients">
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