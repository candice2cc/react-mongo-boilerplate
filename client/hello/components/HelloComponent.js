/**
 * @author Candice
 * @date 2018/6/7 15:33
 */
import React from 'react';
import CSSModules from 'react-css-modules';

import testImg from '../img/test.jpg';
import styles from '../sass/HelloComponent.scss';

const HelloComponent = () => (
  <div styleName="hello">
    <h2>Hello, Component!!!</h2>
    <img src={testImg} />
  </div>
);

export default CSSModules(HelloComponent, styles);
