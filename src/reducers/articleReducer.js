const articleReducer = (state = "placeholder",  action) => {
  switch(action.type){
     case 'article':
       return action.article
     default:
       return state
 }
}

export default articleReducer 
