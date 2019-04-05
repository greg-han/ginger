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

class AuthorInfo extends Component {
  constructor(props){
    super(props);
    this.state ={
       article: this.props.article,
       results: this.props.results,
       author :  this.props.author,	     
       summary: "",
       articlesbyAuthor: []
    }
     this.updateValues = this.updateValues.bind(this);
  }

componentWillMount(){
   this.updateValues();
}




//setstate is async, so we need to do this
async updateValues(){
  for(var i = 0; i < this.props.results.length; i++){
    if(this.state.author == this.props.results[i].authors){
      let inauthors = this.props.results[i].authors;
      let insummary = this.props.results[i].summary;
      await  this.setState({ authors : inauthors} );
      await  this.setState({ summary : insummary});
    }
  }
}

 render(){ 
   return(
           <div>
    <header className="App-header">
     <h1 style={{ marginTop : '3%'}}>
           AuthorInfo
     </h1>
    </header>
   <div className="col-lg-4 col-md-4" >
   <h3>{this.state.article}</h3>
   <br /> <br />
   <p>{this.state.summary}</p>
       </div>
           <br />
   <h3>Authors:</h3>
   {this.state.authors.map((elem,i) =>
          <Link to={"/"} id={elem.name} >
              <b>{elem.name}</b>
           <br />
          </Link>
      )}
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

export default connect(mapStateToProps,mapDispatchToProps)(AuthorInfo);


