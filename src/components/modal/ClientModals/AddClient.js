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
                      <p>2</p>
                    </span>
                    <div className="">
                      <h6>Other Info</h6>
                      <p>Address, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>3</p>
                    </span>
                    <div className="">
                      <h6>Client Details</h6>
                      <p>Website, Contact, Type, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>4</p>
                    </span>
                    <div className="">
                      <h6>Engagements</h6>
                      <p>HST, T1, T2, etc</p>
                    </div>
                  </div>
                  <div className="innerStep">
                    <span>
                      <p>5</p>
                    </span>
                    <div className="">
                      <h6>Accounting Software</h6>
                      <p>Name,Email,Phone</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-8">
                <div>
                  <form action="">
                    <span></span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddClient
