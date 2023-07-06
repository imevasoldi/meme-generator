import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'http://localhost:4000',
  // uri: 'https://hallowed-front-sandbox.up.railway.app/',
  uri: 'https://main--nwm-microservices.apollographos.net/graphql/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,

)
