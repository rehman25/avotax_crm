import React from 'react'
import './assets/css/JobProgress.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {GrFormNext} from 'react-icons/gr'
import {GrFormPrevious}  from 'react-icons/gr' 

const TeamManagement = () => {
    return (
        <div className='JpParentContainer'>
            <div className='JpTop'>
                <span>
                    <p className='Head'>Job Progress</p>
                </span>
            </div>
            <div className='JpBottom'>
                <table className="table align-middle mb-0 bg-white">
                    <thead ct assName="bg-light">
                        <tr className='jptr'>
                            <th><p className='jptbletext'>Job</p></th>
                            <th><p className='jptbletext'>Date</p></th>
                            <th><p className='jptbletext'>Client</p></th>
                            <th><p className='jptbletext'>Job Status</p></th>
                            <th><p className='jptbletext'>WIP Total</p></th>
                            <th><p className='jptbletext'>View</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className='JpTableText'>T2</p>
                            </td>
                            <td>
                                <p className="JpTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="TableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    12,521 
                                    </p>
                            </td>
                            <td>
                                <p className="JpTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='JpTableText'>T2</p>
                            </td>
                            <td>
                                <p className="JpTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="TableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    12,521
                                </p>
                            </td>
                            <td>
                                <p className="JpTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='JpTableText'>T2</p>
                            </td>
                            <td>
                                <p className="JpTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="TableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    12,521
                                </p>
                            </td>
                            <td>
                                <p className="JpTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='JpTableText'>T2</p>
                            </td>
                            <td>
                                <p className="JpTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="TableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="JpTableText">
                                    12,521
                                </p>
                            </td>
                            <td>
                                <p className="JpTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='JpLower'>
                <span className='JpLowerPara'>200 results total</span>
                <div className='Pagination'>
                    <span>
                        <GrFormPrevious />    
                    </span>
                    <span>
                        <GrFormNext />
                    </span>
                </div> 

            </div>

        </div>
    )
}

export default TeamManagement