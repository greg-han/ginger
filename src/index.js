import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { articleAction } from './actions/actions.js';
import { resultsAction } from './actions/actions.js';
import { authorAction } from './actions/actions.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/allReducers'

let store = createStore(allReducers);

ReactDOM.render(
       <Provider store={store}>
	<App />
       </Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
