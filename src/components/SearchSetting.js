import React from 'react'
import { SearchBarSettingFun } from '../redux/slice/modalSlice';
import { useDispatch } from 'react-redux';

function SearchSetting() {
    const dispatch = useDispatch();
  return (
   <>
        <div className='mainSearchBarSettingBox'>
            <div className="searchSettingInnerCheckBox">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Branch_Number" />
                    <label className="form-check-label" for="Branch_Number">Branch Number</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Email" />
                    <label className="form-check-label" for="Email">Email</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Location" />
                    <label className="form-check-label" for="Location">Location</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Early_Drop_off" />
                    <label className="form-check-label" for="Early_Drop_off">Early Drop off</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Phone_Number" />
                    <label className="form-check-label" for="Phone_Number">Phone Number</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Last_Drop_off" />
                    <label className="form-check-label" for="Last_Drop_off">Last Drop off</label>
                </div>
            </div>
            <div className="innerStartEndDateBox">
                <div className="form-group">
                    <input type="date" className='form-control'/>
                </div> <b>_</b>
                <div className="form-group">
                    <input type="date" className='form-control'/>
                </div>
            </div>
            {/* <div className="SearchBarDropDown">
                <select className="form-select">
                    <option selected disabled>Open</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button>Add More</button>
            </div> */}
            <div className="filterApplyBox">
                <button  onClick={() => dispatch(SearchBarSettingFun())}>Cancel</button>
                <button>Apply</button>
            </div>
        </div>
   </>
  )
}

export default SearchSetting
