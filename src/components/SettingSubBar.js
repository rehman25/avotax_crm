import React from 'react'

function SettingSubBar() {
  return (
    <>
      <div className='settingModalBox'>
        <h5>Table Data</h5>
        <div className="">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Branch_Number" />
                <label class="form-check-label" for="Branch_Number">Client Code</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Email" />
                <label class="form-check-label" for="Email">Client</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Early_Drop_off" />
                <label class="form-check-label" for="Early_Drop_off">Client</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Phone_Number" />
                <label class="form-check-label" for="Phone_Number">Key Contact</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="Last_Drop_off" />
                <label class="form-check-label" for="Last_Drop_off">Partner</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default SettingSubBar
