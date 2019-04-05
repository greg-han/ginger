import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/jquery/dist/jquery.min.js';
import { Link } from 'react-router-dom';
 
class Navbar extends Component {
 render(){ 
   return (  
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">arXiv search</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/Info" className="nav-link">Info<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link to="/AuthorInfo" className="nav-link">AuthorInfo<span className="sr-only">(current)</span></Link>
      <li className="nav-item active">
        <Link to="/Authors" className="nav-link">Authors<span className="sr-only">(current)</span></Link>
      </li>
      </li>
    </ul>
  </div>
</nav>
   );
 }
}

export default Navbar 
