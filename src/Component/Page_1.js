import React from 'react';
import './Page_1.css';
import myImg from '../img/icons8-graduation-100.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Page_1() {
  return (
    <div className='page_1'>
      <div className="container px-lg-6">
        <div className="row ">
          <div className="col-md-7 px-lg-5" id='section_1'>
            <div className="intro">
              <h1><strong>Get Valuable <br /> Industry Experience</strong></h1>
              <p>work on industry projects gain employibility <br></br> and explore interships and jobs</p>
              <button className='btn btn-success'> <strong> Explore &nbsp; <FontAwesomeIcon icon={faTelegram}/> </strong></button>
            </div>
          </div>

          <div className="col-md-5 px-lg-5" id='section_2'>
            <img src={myImg} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="half">
          <h1>mdfj dnsdbsi</h1>
        </div> */}
    </div>
  )
}
