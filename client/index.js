/**
 * @author Candice
 * @date 2018/6/20 14:14
 */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import RouteComponent from './routes';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('appRoot')
  );
};
render(RouteComponent);

// Hot Module Replacement API
if (module.hot) {
  /* eslint-disable global-require */
  module.hot.accept('./routes', () => {
    const newRouteComponent = require('./routes').default;
    render(newRouteComponent);
  });
}
