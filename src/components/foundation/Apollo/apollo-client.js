import { ApolloClient } from '@apollo/client'
import CONFIG from 'config/environment'
import { cache } from './apollo-cache'

const client = new ApolloClient({
  cache,
  uri: CONFIG.apiURL,
})

export default client
