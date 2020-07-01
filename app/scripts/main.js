/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './state'
import App from './components/App';

const store = createStore(rootReducer);

// Render this out
const rootElement = document.getElementById('root')
ReactDOM.render(
< Provider
store = {store} >
    < App / >
    < /Provider>,
rootElement
)
