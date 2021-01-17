import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'

import PatientProfileBuilder from './container/PatientProfileBuilder/PatientProfileBuilder'
import { Route, Switch } from 'react-router';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={PatientProfileBuilder}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
