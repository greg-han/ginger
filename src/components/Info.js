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

class Info extends Component {
  constructor(props){
    super(props);
    this.state ={
       article: this.props.article,
       results: this.props.results,
       summary: "",
       authors: []
    }
     this.updateValues = this.updateValues.bind(this);
  }

componentWillMount(){
    this.updateValues();
}

clickAuthor = (author) => {
 this.props.authorAction(author);
}

//This is another great place to put unit tests. Any async operation can be potentially buggy.
async updateValues(){
  for(var i = 0; i < this.props.results.length; i++){
    //searches the 30 results for the matching article that was clicked in the search page 
    //this is all possible with redux state.
    if(this.state.article == this.props.results[i].title){
      let inauthors = this.props.results[i].authors;
      let insummary = this.props.results[i].summary;
      await this.setState({ authors : inauthors} ); 
      await this.setState({ summary : insummary}); 
    }
  }
}

 render(){ 
   return(
    <div>
    <header className="App-header"> 
      <h1 style={{ marginTop : '3%'}}>
        Info
      </h1>
    </header>
    <div className="col-lg-4 col-md-4" >
      <h3>{this.state.article}</h3> 
        <br /> <br />
        <p>{this.state.summary}</p>
    </div>
    <br />
    <div className="col-lg-4 col-md-4" >
      <h3>Authors:</h3>
       {this.state.authors.map((elem,i) =>
            <Link to={"/AuthorInfo"} id={elem.name} onClick={() => {this.clickAuthor(elem.name)}} >
                <b>{elem.name}</b>
     	        <br />
            </Link>
       )}
    <br />
    <br />
    <br />
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

export default connect(mapStateToProps,mapDispatchToProps)(Info);

