import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ImdbPage from './components/ImdbPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ImdbPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
