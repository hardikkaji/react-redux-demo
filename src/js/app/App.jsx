import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Posts from '../posts/Posts';
import rootReducer from '../rootReducer';

import './App.css';

const middleware = [thunk];
const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Posts />
				</div>
			</Provider>
		);
	}
}


export default App;
