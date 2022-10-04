import React from 'react';
import Owl from './Owl/Owl';
import './Page_8.css';
import myImg from '../img/dis.png';

export default function Page_8() {
    return (
        <div className='page_8'>
            <div className="heading">
                <h2><strong>Whats Student are saying about <span style={{color:'purple'}}>Qollabb</span></strong></h2>
                <p>find the interns and jobs for freshers</p>
            </div>
            <Owl/>
            <div className='contain'>
                <img src={myImg} alt="" />
                <h6>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.</h6>
            </div>
        </div>
    )
}
