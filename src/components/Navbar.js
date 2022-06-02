import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className="d-flex">
      <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
      <div className="bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
      <div className="bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
      <div className="bg-warning rounded mx-2" style={{height:'30px', width:'30px', cursor: 'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
    </div>
    <div className="form-check form-switch mx-2" >
    <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode('null')}} role="switch" id="flexSwitchCheckDefault"/>
    <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode}</label>
    </div>
  </div>
</nav>
  )
}



Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}


Navbar.defaultProps = {
    title: 'Set title',
    aboutText: 'Set About Text'
};