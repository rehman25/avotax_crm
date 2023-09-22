import React from 'react'
import {BsEye} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import { RiDeleteBin5Line } from 'react-icons/ri'
import './clientInfotable.css'

const clientInfotable = () => {
  return (
      <table className="table align-middle mb-0 bg-white">
          <thead ct assName="bg-light">
              <tr>
                  <th><input type="Checkbox" name="" id=""  /></th>
                  <th>Client Code</th>
                  <th>Client</th>
                  <th>Key Contact</th>
                  <th>Partner</th>
                  <th>Manager</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>
                      <p className='clientinfotabletext's>
                      <input type="checkbox" name="" id=""  />
                    </p>
                  </td>
                  <td>
                      <p className='clientinfotabletext'>1001</p>
                  </td>
                  <td>
                      <p className='clientinfotabletext'>
                          10429244 Canada Inc
                      </p>
                  </td>
                  <td>
                      <p className='clientinfotabletext'>
                         Paul Wolff  
                          </p>
                  </td>
                  <td>
                      <p className='clientinfotabletext' >
                          Justin Joy
                      </p>
                  </td>
                  <td>
                      <p className='clientinfotabletext'>Corinne </p>
                  </td>
                  <td>
                      <p className='clientinfotabletext'>Pwolff77@hotmail.com</p>
                  </td>
                  <td>
                      <p className='clientinfotabletext'>613-727-6020</p>
                  </td>
                  <td>
                      <p className='CITICOtext'>
                        <span className='CITICo'>
                          <BsEye className='eyeico' />
                        </span>
                          <span className='CITICo'>
                              <MdOutlineModeEditOutline className='editico' />
                        </span>
                          <span className='CITICo'>
                              <RiDeleteBin5Line className='deteleico' />
                        </span>
                     </p>  
                  </td>
              </tr>

          </tbody>
      </table>
  )
}

export default clientInfotable