import React from 'react';
import './Navbar.css';
import myImg from '../img/icon_navbar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-md  ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span className="navbar-toggler-icon"></span>
          <h1><FontAwesomeIcon icon={faBars}/></h1>
        </button>
        <div className="navbar-collapse collapse  w-100 order-1 order-md-0">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <img src={myImg} alt="" />
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Companies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Students</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">College/Universities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">AboutUs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Register</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="borderDiv">
        <div className="borderDivision">

        </div>
      </div>
    </div>
    </>
  )
}
