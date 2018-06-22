/**
 * @author Candice
 * @date 2018/6/7 15:13
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CSSModules from 'react-css-modules';

import {increment as incrementCount} from '../../redux/modules/counter'

import styles from '../sass/Hello3Container.scss';


class Hello3Container extends Component {
  render() {
    const {count} = this.props;
    return (
      <div styleName="hello">
        <span>count:{count}</span>
        <button onClick={this.props.incrementCount}>incrementCount</button>
      </div>
    );
  }
}

Hello3Container.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
};
const mapStateToProps = state => ({
  count: state.counter.count,
});
const mapDispatchToProps = dispatch => ({
  incrementCount: bindActionCreators(incrementCount, dispatch),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(Hello3Container, styles)));

