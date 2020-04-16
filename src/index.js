import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rect from "./Rect"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>React</h1>
    <Rect x="100" y="100" w="100" h="100" c="cyan" r="20"/>
    <Rect x="150" y="150" w="100" h="100" c="magenta" r="50"/>
    <Rect x="125" y="200" w="100" h="100" c="black" r="10"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
