import React from 'react';
import './Owl.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myImg from '../../img/fm.png';
import myImg2 from '../../img/ml.png';

export default function Owl() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div className='owl'>

        <Slider {...settings}>
          <div >
            <div className='owlSlide'>
              <img src={myImg} alt="" />
              <div>
                <h6>Priya Singh</h6>
                <p>Intern at Whatsapp</p>
              </div>
            </div>
          </div>
          
          <div >
            <div className='owlSlide'>
              <img src={myImg2} alt="" />
              <div>
                <h6>Aniket Jha</h6>
                <p>Intern at AONS</p>
              </div>
            </div>
          </div>

          <div >
            <div className='owlSlide'>
              <img src={myImg2} alt="" />
              <div>
                <h6>Sachin Sharma</h6>
                <p>Intern at Benz</p>
              </div>
            </div>
          </div>

          <div >
            <div className='owlSlide'>
              <img src={myImg} alt="" />
              <div>
                <h6>Shilpa Singh</h6>
                <p>Intern at Whatapp</p>
              </div>
            </div>
          </div>

          <div >
            <div className='owlSlide'>
              <img src={myImg2} alt="" />
              <div>
                <h6>Rohan Kamal</h6>
                <p>Intern at Faceboo6</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
