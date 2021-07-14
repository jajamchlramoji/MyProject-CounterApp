import React, { Component } from 'react';
//Stateless Functional Component
const NavBar =({totalCounters}) =>{
    return ( 
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src=".\iconNavbar.jpg" alt="" width="30" height="30" className="d-inline-block align-text-top"/>
      {" "}Counter App {" "}
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </a>
  </div>
</nav> )
}

 
export default NavBar;