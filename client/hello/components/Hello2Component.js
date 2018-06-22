/**
 * @author Candice
 * @date 2018/6/7 15:33
 */

import React from 'react';
import CSSModules from 'react-css-modules';

import testImg from '../img/test.jpg';
import styles from '../sass/Hello2Component.scss';

const Hello2Component = () => (
  <div styleName="hello">
    <h2>Hello, Component2!!!</h2>
    <img src={testImg} />
  </div>
);

export default CSSModules(Hello2Component, styles);
