import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

import App from './components/App/App';

const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql'
});


ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

