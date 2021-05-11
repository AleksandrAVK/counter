// console.log("Hello World");

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './components/app'

const node = document.querySelector('#root');
ReactDOM.render(
    <App />,
   node
);