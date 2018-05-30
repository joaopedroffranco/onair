import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './router'

import './index.css';

ReactDOM.render(<BrowserRouter>
	<Route component={Router} />
</BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
