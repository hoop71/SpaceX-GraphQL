import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Launches from './modules/launches'
import './index.css'

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
})

function App() {
	return (
		<ApolloProvider client={client}>
			<Launches />
		</ApolloProvider>
	)
}

export default App
