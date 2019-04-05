export const articleAction = (article) =>{
  {
	return {  type: 'article' , 
          article : article
	}
  }
}

export const resultsAction = (results) =>{
  {
	  return {type: 'results' , 
          results : results  
	  }
  }
}

export const authorAction = (author) =>{
  {
	  return {type: 'author' , 
          author : author 
	  }
  }
}
