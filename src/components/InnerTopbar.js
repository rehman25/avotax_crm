import React, {useState} from 'react'
import './assets/css/topbar.css'
import { LuFilter } from 'react-icons/lu'
import AddUserForm from './stepperForm/AddUserForm'


function InnerTopbar() {
  const [isFormOpen , setFormOpen] = useState(false)
  const handleForm = () =>{
    setFormOpen(!isFormOpen)
  }

   
    return (
        <>
            <div className='InnerTopbar row'>
                <div className="col-lg-6 col-md-6 col-sm-6"></div>
                <div className="col-lg-6 col-md-6 col-sm-6 innerRightSide">
                    <button><LuFilter />Filter</button>
                    <button className='CreateJobbtn' onClick={handleForm}>Create Job</button>
                </div>
            </div>
            {isFormOpen ? <AddUserForm open={handleForm}/> : ""}
        </>
    )
}

export default InnerTopbar
