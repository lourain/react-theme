import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Bar from './components/bar/index'

import './static/flexible.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Bar />
    </Router>,
     document.getElementById('root'));
registerServiceWorker();
