import React from 'react'
import { ReactPropTypes } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = (props) => {
  return (
    <div classNameName="container">
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div classNameName="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.about}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  </div>
  )
}

Navbar.defaultProps = {
    home: "Home here",
    about: "About here"
}

export default Navbar
