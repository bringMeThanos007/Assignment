import React from 'react';
import './Page_4.css';
import myImg1 from '../img/icon_company.png';
import myImg2 from '../img/icon_education.png';
import myImg3 from '../img/icon_college.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';

export default function Page_4() {
  return (
    <div className='page_4'>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
            <div className="division">
                <img src={myImg1} alt="" />
                <h2>Company</h2>
                <p>Create 2d/3d video animation in a short period of time desih=gned to promote a company product</p>
                <a href="/">Explore &nbsp;<FontAwesomeIcon icon={faArrowRight}/> &nbsp;</a>
                </div>
            </div>

            <div className="col-md-4">
            <div className="division">
                <img src={myImg2} alt="" />
                <h2>Education</h2>
                <p>Make your website design / mobile application
                design more colorful and give a cool impression onuser</p>
                <a href="/">Explore &nbsp;<FontAwesomeIcon icon={faArrowRight}/> &nbsp;</a>
                </div>           
            </div>

            <div className="col-md-4">
            <div className="division">
                <img src={myImg3} alt="" />
                <h2>College/University</h2>
                <p>Create customizable illustrations with attractive design that are made visually through</p>
                <a href="/">Explore &nbsp; <FontAwesomeIcon icon={faArrowRight}/> &nbsp;</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
