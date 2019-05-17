import React, { Component } from 'react'


const Navbar = ({totalCounters}) => {

  return (  
    <nav className="navbar navbar-dark bg-primary">
    <span className="badge badge-pill badge-secondary">
    Navbar: The number of counters greater than one are, {totalCounters}
    </span>
   </nav>
  );
}
 
export default Navbar;