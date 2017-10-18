import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import Layout from './components/layout/Layout';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={Layout} />
            </div>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
