import { InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache(/* Insert here your app-specific cache options */)

/* eslint-disable import/prefer-default-export */
export { cache /* Export here makeVar items etc */ }
