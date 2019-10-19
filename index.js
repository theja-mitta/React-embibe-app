import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './components';
import Students from './components/Students';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, PrivateRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import {createStore } from 'redux';
// import reducers from './reducers';

// const store = createStore(reducers);

const customHistory = createBrowserHistory();


render(  
    <Router history={customHistory}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/Students" component={Students} />
      </Switch>
    </Router>,
  document.getElementById('root')
);