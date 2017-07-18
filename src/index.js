import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
