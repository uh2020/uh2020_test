import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapSateToPropsForRedirect = (state) => ({
  regDone: state.auth.regDone,
});

export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.regDone) return <Redirect to="/auth" />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAutnRedirectComponent = connect(mapSateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAutnRedirectComponent;
};
