import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './index.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
