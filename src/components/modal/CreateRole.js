import React from 'react'
import "./assets/css/createRole.css"
import { GrClose } from 'react-icons/gr';



function CreateRole() {
    return (
        <>
            <div className="createrolemodel">
                <div className="createrolemodelInnerBox">
                    <h4> Create Role </h4>
                    <GrClose className='closeiconerole' />
                    <form action="">
                        <div className='createrolmaincontainer'>
                            <div className='createrollheadercont'>
                                <span>Role Name</span>
                                <input type="text" name="" id="" className='form-control' />
                            </div>
                            <div className='createrollheader'>
                                <h5>Role Premission</h5>
                            </div>
                            <table className="table align-middle mb-0 bg-white">
                                <thead ct assName="bg-light">
                                    <tr className='craeterolltr'>
                                        <th><p className='createtabletext'>Administrator Access</p></th>
                                        <th><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Read</p></p></th>
                                        <th><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Write</p></p></th>
                                        <th><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Create</p></p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='craeterolltr'>
                                        <td><p className='createtabletext'>Administrator Access</p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Read</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Write</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Create</p></p></td>
                                    </tr>
                                    <tr className='craeterolltr'>
                                        <td><p className='createtabletext'>Administrator Access</p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Read</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Write</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Create</p></p></td>
                                    </tr>
                                    <tr className='craeterolltr'>
                                        <td><p className='createtabletext'>Administrator Access</p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Read</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Write</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Create</p></p></td>
                                    </tr>
                                    <tr className='craeterolltr'>
                                        <td><p className='createtabletext'>Administrator Access</p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Read</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Write</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Create</p></p></td>
                                    </tr>
                                    <tr className='craeterolltr'>
                                        <td><p className='createtabletext'>Administrator Access</p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Read</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Write</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Create</p></p></td>
                                    </tr>
                                    <tr className='craeterolltr'>
                                        <td><p className='createtabletext'>Administrator Access</p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Read</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Write</p></p></td>
                                        <td><p className='createtabletext'><input type="checkbox" name="" id="" /><p>Create</p></p></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default CreateRole;