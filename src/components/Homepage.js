import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/jquery/dist/jquery.min.js';
import './App.css';
import arxiv from 'arxiv';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { articleAction } from '../actions/actions.js';
import { resultsAction } from '../actions/actions.js';
import { authorAction } from '../actions/actions.js';
import { Link } from 'react-router-dom'


const thumbnail = {
        backgroundColor : 'white'
} 



class Homepage extends Component {
  constructor(){
    super();

  this.state = {
    authors: [],
    searchQueries : [], 
    thirtyresults: [],
    clickedarticle: ""
  };
   this.callarvix = this.callarvix.bind(this);
   this.updateResults = this.updateResults.bind(this);
  }
   async updateResults(){
     await this.props.resultsAction(this.state.thirtyresults);
     //console.log("results",this.props.results);
   }

   updateArticle =  (title) => {
        this.props.articleAction(title); 
        //console.log("arttprops",this.props.article);
   }

   async callarvix(){
      let thirtydays = 2592000000;
      let now = new Date().getTime();
      let search = this.state.searchQueries[0];
      let articledate = new Date();
      let thirtyresultsinside = [];
      let search_query_no = {
        category: "data science computer science psychiatry",
      };
      await arxiv.search(search_query_no, function(err, results){
         articledate = 0; 
         console.log("Results", results);
         for(var i =0; i < results.items.length;i++){
           articledate = new Date(results.items[i].updated).getTime();
           if((now - articledate)  <=  thirtydays){
            if(thirtyresultsinside.length < 30){
             thirtyresultsinside.push(results.items[i]);
	    }
	   }
	 }
         this.setState({thirtyresults : thirtyresultsinside});
         console.log("thirtyresults",this.state.thirtyresults);
         this.checkLoop();
         this.updateResults();
      }.bind(this));
   }

   checkLoop = () =>{
     if(this.state.thirtyresults.length < 30){
      this.callarvix();
     }
   }

   storeQuery = (event) => {
     //this freezes and prevents refresh
     event.preventDefault();
     this.setState({searchQueries : [...this.state.searchQueries, this.search.value]});
     this.callarvix();
  } 

 render(){ 
   return(
	   <div>
   <div className="App-header">
     <h1>
	   arXiv Search
     </h1>
     <form className="form-inline"  onSubmit={this.storeQuery}>
      <input  className="form-control" type="location" ref={(e) => this.search= e } type="search" placeholder="topics" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
   </form>
	   </div>
   {this.state.thirtyresults.map((elem,i) =>
          <div className="col-lg-4 col-md-4" >
          <Link to={"/Info"}className="thumbnail" id={elem.title} onClick={() => {this.updateArticle(elem.title)}} >
              <b>{elem.title}</b>
          </Link>
	  <br />
	  <br />
          </div>
      )}
    </div>
   );   
 }
}


const mapStateToProps = (state) => {
    return {
            article : state.articleReducer,
            results : state.resultsReducer,              
            results : state.authorReducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({ articleAction, resultsAction, authorAction}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
