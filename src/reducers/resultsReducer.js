const resultsReducer = (state = [], action) => {
    switch(action.type){
      case 'results':
         console.log("In reducer", action.results);
         return action.results
      default:
         return state

    }

}

export default resultsReducer
