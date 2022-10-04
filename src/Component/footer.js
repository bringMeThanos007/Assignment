import React, { Component } from 'react';
import myImg from '../img/icon.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

export class Footer extends Component {
  render() {
    return (
      <div className='footer' style={{height: "350px",overflow: "clip",backgroundColor: "#ebeff7"}}>
        <div className="row align-items-start" style={{}}>
          <div className="col-4 d-flex align-items-center flex-column justify-content-center" style={{marginTop: "40px"}}>
            <div className="ftr font-monospace me-3">
              <ul className="list my-2" style={{ listStyleType: "none" }}>
                <li><img src={myImg} alt="" /></li>
                <p className='mt-4'>Open the door for<br /> brilliant ideas to<br /> flow for you</p>
                </ul>
                 <div className="social d-flex justify-content-between fa-2x align-items-center ms-4 me-2 ps-3" style={{}}>

                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} id="sicon1" className="rotate"></FontAwesomeIcon></a>
                <a href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} id="sicon2" className="rotate ms-2"></FontAwesomeIcon></a>
                <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} id="sicon3" className="rotate ms-2"></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} id="sicon4" className="rotate ms-2"></FontAwesomeIcon></a>
              </div>

            </div>

          </div>
          <div className="col-6 d-flex justify-content-between align-items-center" style={{ marginTop: "60px", fontSize: "16px"}}>
            <div className="col-md-3" style={{}}>
              <ul className="list my-2 p-4" style={{ listStyleType: "none" }}>
                <li style={{ color: "#6149cd", fontWeight: "bolder" }}><strong>Home</strong></li>
                <li>Companies</li>
                <li>Students</li>
                <li>College/Universities</li>
                <li>About us</li>
              </ul>
            </div>
            <div className="col-md-3" style={{}}>
              <ul className="list my-2" style={{ listStyleType: "none" }}>
                <li style={{ color: "#6149cd", fontWeight: "bolder" }}><strong>Home</strong></li>
                <li>Companies</li>
                <li>Students</li>
                <li>About us</li>
                <li>College/Universities</li>
              </ul>
            </div>
            <div className="col-md-3" style={{}}>
              <ul className="list my-2" style={{ listStyleType: "none" }}>
                <li style={{ color: "#6149cd", fontWeight: "bolder" }}><strong>Home</strong></li>
                <li>College/Universities</li>
                <li>Students</li>
                <li>Companies</li>
                <li>About us</li>
              </ul>
            </div>


          </div>
        </div>
        <hr />
        <div className="copy text-center"><strong>Copyright@Qollabb 2022. All rights reserved</strong> </div>
</div>
    )
  }
}

export default Footer
