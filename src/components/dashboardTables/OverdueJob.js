import React from 'react'
import './assets/css/OverdueJob.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'

const TeamManagement = () => {
    return (
        <div className='OdjParentContainer'>
            <div className='OdjTop'>
                <span>
                    <p className='Head'>Overdue Job</p>
                </span>
            </div>
            <div className='OdjBottom'>
                <table className="table align-middle mb-0 bg-white">
                    <thead ct assName="bg-light">
                        <tr className='objtr'>
                            <th><p className='objtbletext'>Job</p></th>
                            <th><p className='objtbletext'>Date</p></th>
                            <th><p className='objtbletext'>Client</p></th>
                            <th><p className='objtbletext'>Job Status</p></th>
                            <th><p className='objtbletext'>End Date</p></th>
                            <th><p className='objtbletext'>View</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className='OdjTableText'>T2</p>
                            </td>
                            <td>
                                <p className="OdjTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="TableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    12,521
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='OdjTableText'>T2</p>
                            </td>
                            <td>
                                <p className="OdjTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    12,521
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='OdjTableText'>T2</p>
                            </td>
                            <td>
                                <p className="OdjTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="TableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    12,521
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='OdjTableText'>T2</p>
                            </td>
                            <td>
                                <p className="OdjTableText">Dec 31 2020</p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    9829253 Canada Inc - Sean Swarts
                                </p>
                            </td>
                            <td>
                                <p className="TableTextHighlighted">
                                    In Process
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableText">
                                    12,521
                                </p>
                            </td>
                            <td>
                                <p className="OdjTableIcon">
                                    <BsThreeDotsVertical />
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='OdjLower'>
                <span className='OdjLowerPara'>200 results total</span>
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