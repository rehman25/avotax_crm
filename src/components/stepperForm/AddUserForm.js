import React from 'react'
import './Assets/css/AddUserForm.css'
import {RxCross2} from 'react-icons/rx'
import { useSelector, useDispatch } from 'react-redux';
import { CreateUserFun } from '../../redux/slice/modalSlice';



const AddUserForm = (props) => {
  const dispatch = useDispatch();

  return (
       <div className="AddUserMainContainer ">
         <div className="container-fluid FormContainer">
          <div className="row AddUserHeaderRow">
            <div className="col-12 AddUserHeader">
                <p>Add User</p>
                <p><RxCross2 onClick={() => dispatch(CreateUserFun())} /></p>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-4">
                box
            </div>
            <div className="col-8">
                box
            </div>
          </div>
              <div className="row AddUserBottomRow">
                  <div className="col-12 AddUserBottom">
                      <button className='AddUserCancelbtn'>Cancel</button>
                      <button className='AddUserNextbtn'>Next</button>
                  </div>
          </div>
          </div>
       </div>
  )
}

export default AddUserForm