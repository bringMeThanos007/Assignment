import React from 'react';
import './Owl_2.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myImg1 from '../../img/comp_1.png';
import myImg2 from '../../img/comp_2.png';
import myImg3 from '../../img/comp_3.png';
import myImg4 from '../../img/comp_4.png';
import myImg5 from '../../img/comp_5.png';
import myImg6 from '../../img/comp_6.png';
import myImg7 from '../../img/comp_7.png';
import myImg8 from '../../img/comp_8.png';
import myImg9 from '../../img/comp_9.png';

export default function Owl_2() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      return (
        <>
          <div className='owl_2'>
    
            <Slider {...settings}>
              <div >
                <div className='owlSlide_2'>
                  <img src={myImg1} alt="" />
                  
                </div>
              </div>
              
              <div >
                <div className='owlSlide_2'>
                  <img src={myImg2} alt="" />
                  
                </div>
              </div>
    
              <div >
                <div className='owlSlide_2'>
                  <img src={myImg3} alt="" />
                  
                </div>
              </div>
    
              <div >
                <div className='owlSlide_2'>
                  <img src={myImg4} alt="" />
                  
                </div>
              </div>
    
              <div >
                <div className='owlSlide_2'>
                  <img src={myImg5} alt="" />
                
                </div>
              </div>
              <div >
                <div className='owlSlide_2'>
                  <img src={myImg6} alt="" />
                
                </div>
              </div>

              <div >
                <div className='owlSlide_2'>
                  <img src={myImg7} alt="" />
                
                </div>
              </div>

              <div >
                <div className='owlSlide_2'>
                  <img src={myImg8} alt="" />
                
                </div>
              </div>

              <div >
                <div className='owlSlide_2'>
                  <img src={myImg9} alt="" />
                
                </div>
              </div>
            </Slider>
          </div>
        </>
      )
}
