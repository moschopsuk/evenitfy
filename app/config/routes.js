import React from 'react';
import {Route} from 'react-router';
import Index from '../components/Index';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default (
  <Route component={App}>
    <Route path='/' component={Index} />
  </Route>
);
