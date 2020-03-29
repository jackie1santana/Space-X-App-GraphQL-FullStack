import React from 'react';
import ApolloClient from 'apollo-boost'
// wrap the main component in this & pass in the client
import {ApolloProvider} from 'react-apollo'
import Launches from './components/Launches'
import logo from './logo.png'
import './App.css';

// wrap the main component in this & pass in the client
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
     <img src={logo} alt="SpaceX" style={{ 
       width:300, display: 'block', margin: 'auto' }}/>
       <Launches/>
    </div>
    </ApolloProvider>
  );
}

export default App;
