import { combineReducers } from 'redux'
import resultsReducer from './resultsReducer.js'
import articleReducer from './articleReducer.js'
import authorReducer from './authorReducer.js'

const allReducers = combineReducers({
    resultsReducer,
    articleReducer,
    authorReducer
})

export default allReducers
