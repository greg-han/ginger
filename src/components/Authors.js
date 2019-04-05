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

      //countMap[this.props.results[i].authors[k]] = countMap[this.props.results[i].authors[k]] ? countMap[this.props.results[i].authors[k]]  + 1 : 1; 
//setstate is async, so we need to do this
async updateValues(){
  //var countMap = {};
  var countMap = new Map();
  for(var i = 0; i < this.props.results.length; i++){
    for(var k = 0; k < this.props.results[i].authors.length; k++){
      //would get very long if I ketp calling it like this
      let auth = this.props.results[i].authors[k].name;
      countMap.has(auth) ? countMap.set(auth,countMap.get(auth) + 1) : countMap.set(auth,1);
    }
  }
  [...countMap].sort(function(a, b){
        return b.value - a.value;
  });
  var arr = [];
  arr = [...countMap];
  await this.setState({ authorCount : arr} ); 
  console.log("authorCount", this.state.authorCount);
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
           <div>
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
