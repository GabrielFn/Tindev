import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/dev/:id" component={Main}></Route>
    </BrowserRouter>
  )
}

export default Routes;
