import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { load as loadToken } from '../../redux/modules/token';

/**
 * 需要登录的路由页面
 */
class AuthContainer extends Component {
  componentWillMount() {
    this.props.loadToken().then(() => {
      const { userInfo } = this.props;
      if (userInfo) {
        const { loginState, loginUrl } = userInfo;
        if (!loginState) {
          // 服务端会根据loadToken的service返回对应的loginUrl
          console.log(loginUrl);
          window.location.href = loginUrl;
        }
      }
    });
  }

  render() {
    return <div>{/* <Route path="/hello/:userID" component={HomeContainer}/> */}</div>;
  }
}

const mapStateToProps = state => ({
  userInfo: state.token.userInfo
});
const mapDispatchToProps = dispatch => ({
  loadToken: bindActionCreators(loadToken, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthContainer)
);
