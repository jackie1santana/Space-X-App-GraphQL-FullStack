import React from 'react';
import ApolloClient from 'apollo-boost'
// wrap the main component in this & pass in the client
import {ApolloProvider} from 'react-apollo'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import logo from './logo.png'
import './App.css';

// wrap the main component in this & pass in the client
const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
    
    <ApolloProvider client={client}>
    <Router>
    <div className="container">
    
     <img src={logo} alt="SpaceX" style={{ 
       width:300, display: 'block', margin: 'auto' }}/>
       <p style={{display: 'block', margin: 'auto'}}>All Rights Reserved 2020 Jackie Santana</p>
       <Route exact path="/" component={Launches} />
       <Route exact path="/launch/:flight_number" component={Launch} />
    </div>
    </Router>
    </ApolloProvider>
    
  );
}

export default App;
