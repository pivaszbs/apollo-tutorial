import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App/App';
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";

const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql',
    fetchOptions: {
        credentials: 'inclide'
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    },
    onError: ({ networkError }) => {
        if (networkError) {
            console.log('Network error', networkError)

            if (networkError.statusCode === 401) {
                localStorage.removeItem('token')
            }
        }
    }
});

const Root = () => (
  <Router>
      <Switch>
          <Route path={'/'} component={App} exact />
          <Route path={'/signin'} component={Signin} exact />
          <Route path={'/signup'} component={Signup} exact />
          <Redirect to={'/'} />
      </Switch>
  </Router>
);


ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Root />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

