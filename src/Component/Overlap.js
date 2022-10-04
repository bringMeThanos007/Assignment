import React from 'react';
import './overlap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo  } from '@fortawesome/free-solid-svg-icons';

export default function Overlap() {
    return (

        <div className="div">
            <div className="cont">
                <div className="div_1">
                    <button className='btn btn-primary btn-lg'> <FontAwesomeIcon icon={faVideo}/> &nbsp; Explore Opportunities  </button>
                </div>
                <div className="div_2">
                    <button className='btn btn-primary btn-lg'> <FontAwesomeIcon icon={faVideo}/> &nbsp; Connect with Us</button>
                </div>
                <div className="div_3">
                    <button className='btn btn-primary btn-lg'><FontAwesomeIcon icon={faVideo}/> &nbsp; Sign Up For Free</button>
                </div>
            </div>
        </div>

    )
}
