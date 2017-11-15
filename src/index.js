import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma';
import 'font-awesome/css/font-awesome.css';

import './index.css';

import { Main } from './Main.js';

window.onload = () => {
    const element = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(element);
    ReactDOM.render(<Main></Main>, element);
}
