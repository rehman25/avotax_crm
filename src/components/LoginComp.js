import React, { Component, useState } from 'react';
import "./assets/css/login.css";
import Slider from "react-slick";
import bitcologo from './assets/images/bitco.avi.png';
import Statistics from './assets/images/Stats.avi.png';
import Next from './assets/images/next.avi.png'
import showPwdImg from './assets/images/hide.avi'
import hidePwdImg from './assets/images/show.avi'


function LoginComp() {
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <section className='loginSection'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 p-0">
            <SimpleSlider />
          </div>
          <div className="col-lg-6">
            <div className='sliderRightSide'>
              <div className='innersliderRightSide'>
                  <h4>Sign in</h4>
                  <h6>How bitco helps?<a href="">Have a look</a><img src={Next} alt="" /></h6>
                  <form action="">
                    <div class="form-group">
                      <label >Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email" />
                    </div>
                    <div class="form-group" style={{position: "relative"}}>
                      <div className='innerFormFlex'>
                          <label>Password</label>
                          <a href="">Forgot Password</a>
                      </div>
                      <input type={isRevealPwd ? "text" : "password"} className="form-control" />
                      <img className='pwdShowHideImg'
                          title={isRevealPwd ? "Hide password" : "Show password"}
                          src={isRevealPwd ? hidePwdImg : showPwdImg}
                          onClick={() => setIsRevealPwd(prevState => !prevState)}
                      />
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input"/>
                      <label class="form-check-label">Remember me</label>
                    </div>
                    <button>Sign in</button>
                  </form>
                  <div className='loginFooter'>
                    <div className='loginFfooterleft'>
                      <a href="#">© 2023-2024</a>
                      <a href="#">www.bitco.com</a>
                    </div>
                    <div className='loginFooterright'>
                      <a href="#">Terms & conditions</a>
                      <a href="#">Privacy Policy</a>
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className='sliderLeftSide'>
        <Slider {...settings}>
          <div className="Slider">
            <img src={bitcologo} alt="" className='img_1' />
            <img src={Statistics} alt="" className='img_2' />
            <div className="content">
              <h4>Start your <br /> journey with us.</h4>
              <p>In publishing and graphic design, Lorem ipsum is placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying.</p>
            </div>
          </div>

          <div className="Slider">
            <img src={bitcologo} alt="" className='img_1' />
            <img src={Statistics} alt="" className='img_2' />
            <div className="content">
              <h4>Start your <br /> journey with us.</h4>
              <p>In publishing and graphic design, Lorem ipsum is placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying.</p>
            </div>
          </div>

          <div className="Slider">
            <img src={bitcologo} alt="" className='img_1' />
            <img src={Statistics} alt="" className='img_2' />
            <div className="content">
              <h4>Start your <br /> journey with us.</h4>
              <p>In publishing and graphic design, Lorem ipsum is placeholder text commonly used to demonstrate the visual form  of a document or a typeface without relying.</p>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}
export default LoginComp;