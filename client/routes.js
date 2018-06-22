/**
 * @author Candice
 * @date 2018/6/20 14:14
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

// 引入全局样式
import './lib/iconfonts/style.scss';
import './lib/sass/global/animation.scss';
import './lib/sass/index.scss';

import HelloComponent from './hello/components/HelloComponent';
import Hello2Component from './hello/components/Hello2Component';
import Hello3Container from './hello/containers/Hello3Container';

export default () => (
  <Router>
    <div>
      <h2>react mongo boilerplate</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">hello component</Link>
        </li>
        <li>
          <Link to="/h2">hello2 component</Link>
        </li>
        <li>
          <Link to="/h3">hello3 component</Link>
        </li>
        <li>
          <Link to="/test">test direct route</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={HelloComponent} />
      <Route path="/hello" component={HelloComponent} />
      <Route path="/h2" component={Hello2Component} />
      <Route path="/h3" component={Hello3Container} />
      <Route path="/test" render={() => <Redirect to="/" />} />
    </div>
  </Router>
);
