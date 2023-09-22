import React from 'react'
import './assets/css/WipPartner.css'
import WipChart from './charts/WipChart'

const WipPartner = () => {
  return (
      <div className='WipParentContainer'>
          <div className='WipTop'>
              <span>
                  <p className='Head'>Total WIP By Partner</p>
              </span>
          </div>
          <div className='WipBottom row'>
            <div className='WipChartsLeft col-lg-6 col-md-6 '>
                <div className='WipPartners'>
                      <span className='PartnerName'>
                          <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" />
                         <span  className='WipPara'>
                              <p>Partner Name</p>
                              <p className='paracolor'>Justin Joy</p>
                         </span>
                    </span>
                      <span className='PartnerName'>
                          <span className='WipPara'>
                              <p>WIP</p>
                              <p className='paracolor'>13,555</p>
                          </span>
                      </span>
                   
                </div>
                  <div className='WipPartners'>
                      <span className='PartnerName'>
                          <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" />
                          <span className='WipPara'>
                              <p>Partner Name</p>
                              <p className='paracolor'>Justin Joy</p>
                          </span>
                      </span>
                      <span className='PartnerName'>
                          <span className='WipPara'>
                              <p>WIP</p>
                              <p className='paracolor'>13,555</p>
                          </span>
                      </span>

                  </div>
                  <div className='WipPartners'>
                      <span className='PartnerName'>
                          <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" />
                          <span className='WipPara'>
                              <p>Partner Name</p>
                              <p className='paracolor'>Justin Joy</p>
                          </span>
                      </span>
                      <span className='PartnerName'>
                          <span className='WipPara'>
                              <p>WIP</p>
                              <p className='paracolor'>13,555</p>
                          </span>
                      </span>

                  </div>
                  <div className='WipPartners'>
                      <span className='PartnerName'>
                          <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" />
                          <span className='WipPara'>
                              <p>Partner Name</p>
                              <p className='paracolor'>Justin Joy</p>
                          </span>
                      </span>
                      <span className='PartnerName'>
                          <span className='WipPara'>
                              <p>WIP</p>
                              <p className='paracolor'>13,555</p>
                          </span>
                      </span>

                  </div>
                 <div className='WipTotal'> 
                      <span>Total WIP</span>
                      <span className='TotalWip'>13,5479</span>
                </div> 

            </div>
              <div className='WipChartsRight col-lg-6 col-md-6 '>
                  <WipChart />

             </div>
         
          </div>
      </div>
  )
}

export default WipPartner