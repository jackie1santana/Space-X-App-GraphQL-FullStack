# Developer Notes

### This is a React App that uses GraphQL to query Elon Musk's `Space X` api for `Rocket Types & Real Time Rocket Launch Data`

run `npm run server` runs both express and react server via concurrently

### React theme is by bootswatch

installed Cors to prevent  No `'Access-Control-Allow-Origin'` from connecting from server to server
cd.. out of client and run `npm i cors` via server.js
`const cors = require('cors')
app.use(cors())`

pass in Apollo Client thru the Apollo Provider (similar to the way redux/provider works)

`import ApolloClient from 'apollo-boost'`
wrap the main component in this & pass in the client
`import {ApolloProvider} from 'react-apollo'`

`import gql from 'graphql-tag'` parses the graphql query into javascript to fetch

Also i'm using `npm i classnames` to implement classes via JS & `moment react-moment` installed in client packages.json

Using `react-router-dom`
