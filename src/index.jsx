import React from 'react';
import ReactDOM from 'react-dom';
import './global.sass';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
