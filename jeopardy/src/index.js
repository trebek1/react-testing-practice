import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Category from './components/Category';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component = {App}	 />
				<Route exact path='/category' component = {Category} />
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));
