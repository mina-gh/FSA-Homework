import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Game} from './components'

// render returns a React element which is a lightweight description of what to render
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
