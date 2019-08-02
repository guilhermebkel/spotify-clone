import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import { PUBLIC_URL } from './config/env'

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path={PUBLIC_URL} component={App} />
    </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();