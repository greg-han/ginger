import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/jquery/dist/jquery.min.js';
import './App.css';

class Authors extends Component {
 render(){ 
   return(
    <header className="App-header"> 
     <h1 style={{ marginTop : '3%'}}>
	   Authors
     </h1>
    </header>
   );   
 }
}

export default Authors;
