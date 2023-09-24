import React from 'react'
import { GrClose } from 'react-icons/gr';
import '../../modal/assets/css/AddClient.css'
import { useSelector, useDispatch } from 'react-redux';
import { AddClientFun } from '../../../redux/slice/modalSlice';


function AddClient() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="addClientModal">
        <div className="inneraddClientModal">
          <div className="">
            <div className="customeRow">
              <h5>Add Client</h5>
              <GrClose onClick={() => dispatch(AddClientFun())}/>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="clientStepsBox">

                  <div className="innerStep">
                    <span>
                      <p>1</p>
                    </span>
                    <div className="">
                      <h6>Details</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>1</p>
                    </span>
                    <div className="">
                      <h6>Details</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>1</p>
                    </span>
                    <div className="">
                      <h6>Details</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>1</p>
                    </span>
                    <div className="">
                      <h6>Details</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>1</p>
                    </span>
                    <div className="">
                      <h6>Details</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-8">
                hamza
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient
