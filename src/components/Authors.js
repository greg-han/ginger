import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/jquery/dist/jquery.min.js';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { articleAction } from '../actions/actions.js';
import { resultsAction } from '../actions/actions.js';
import { authorAction } from '../actions/actions.js';
import { Link } from 'react-router-dom';


class Authors extends Component {
 constructor(props){
    super(props);
    this.state ={
       results: this.props.results,
       authorCount: []

    }
     this.updateValues = this.updateValues.bind(this);
  }

componentWillMount(){
    this.updateValues();
}

clickAuthor = (author) => {
  this.props.authorAction(author);
}

//My logic here is as follows: The most prominent authors will be authors in many articles.
//Therefore If I find their name, their counter gets incremnted in a hashmap. 
//I then sort the map. The most appearances in articles will appear at the top of this list.
//Unfortunately, most of the time their names only appear once.
async updateValues(){
  var countMap = new Map();
  for(var i = 0; i < this.props.results.length; i++){
    for(var k = 0; k < this.props.results[i].authors.length; k++){
      let auth = this.props.results[i].authors[k].name;
      //this is a great place for a unit test if the number of entries in the map becomes very large.
      countMap.has(auth) ? countMap.set(auth,countMap.get(auth) + 1) : countMap.set(auth,1);
    }
  }
  //es6 spread operator allows conversion to base type (maps are a wrapper class for arrays). 
  [...countMap].sort(function(a, b){
        return b.value - a.value;
  });
  var arr = [];
  arr = [...countMap];
  await this.setState({ authorCount : arr} ); 
};

 render(){ 
   return(
     <div>
       <header className="App-header"> 
         <h1 style={{ marginTop : '3%'}}>
	   Profilic Authors
         </h1>
       </header>
       <div className="col-lg-4 col-md-4" >
         <br />
         <h3>Authors:</h3>
           {this.state.authorCount.map((elem,i) =>
             <Link to={"/AuthorInfo"} id={elem[0]} onClick={() => {this.clickAuthor(elem[0])}} >
               <b>Author: {elem[0]} <br/>ArticlesAuthored: {elem[1]}</b>
               <br />
	       <br />
             </Link>
           )}
       </div>
     </div>
   );
 }

}


const mapStateToProps = (state) => {
    return {
            article : state.articleReducer,
            results : state.resultsReducer,
            author : state.authorReducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({ articleAction, resultsAction, authorAction}, dispatch);

}


export default connect(mapStateToProps,mapDispatchToProps)(Authors);
