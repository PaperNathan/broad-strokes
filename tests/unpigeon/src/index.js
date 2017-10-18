import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Nav from './components/nav/Nav';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <Router>
            <Route path="/" component={Layout} />
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
