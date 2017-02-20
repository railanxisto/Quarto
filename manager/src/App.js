import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = { 
			apiKey: 'AIzaSyAbTV53-9Ob1HP1sxP8Gio3mFqHVWY1z-0',
			authDomain: 'manager-3b581.firebaseapp.com',
			databaseURL: 'https://manager-3b581.firebaseio.com',
			storageBucket: 'manager-3b581.appspot.com',
			messagingSenderId: '309997616915' };
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Router />
			</Provider>
		);
	}
}

export default App;
