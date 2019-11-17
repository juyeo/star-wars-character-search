import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { characterReducer } from './reducers/character-reducer'
import { applyMiddleware, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './index.css';
import App from './App';

const middlewares: Middleware[] = [thunk];
 
if (process.env.NODE_ENV === `development`) { 
  middlewares.push(logger);
}
 
const store = createStore(characterReducer, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);