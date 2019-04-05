const authorReducer = (state = "authorplaceholder",  action) => {
  switch(action.type){
     case 'author':
       return action.author
     default:
       return state
 }
}

export default authorReducer 

