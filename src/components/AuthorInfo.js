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
       results: this.props.results,
       author :  this.props.author,	     
       articles: []
    }
     this.updateValues = this.updateValues.bind(this);
  }

componentWillMount(){
   this.updateValues();
}


async updateValues(){
  for(var i = 0; i < this.props.results.length; i++){
   for(var k = 0; k < this.props.results[i].authors.length; k++){
      if(this.props.results[i].authors[k].name == this.props.author){
       await this.setState({ articles: [...this.state.articles,this.props.results[i].title]} );
      }
   }
  }
}

 render(){ 
   return(
           <div>
    <header className="App-header">
     <h1 style={{ marginTop : '3%'}}>
           Author Info
     </h1>
    </header>
   <div className="col-lg-4 col-md-4" >
       </div>
           <br />
   <h3>Author:</h3>
   {this.state.author}
   <h3>Articles:</h3>
   {this.state.articles.map((elem,i) =>
	   <div>
              <b>{elem}</b>
	   <br />
	   </div>
      )}
           <br />
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


