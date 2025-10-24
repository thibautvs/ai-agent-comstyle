const env = process.env.NODE_ENV
const CONFIG = {}

if (env === 'development') {
  Object.assign(CONFIG, {
    apiURL: 'http://localhost:4000',
    sentryDSN: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  })
}

if (env === 'test') {
  Object.assign(CONFIG, {
    apiURL: 'https://[testURL]',
    sentryDSN: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  })
}

if (env === 'production') {
  Object.assign(CONFIG, {
    apiURL: 'https://[productionURL]',
    sentryDSN: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  })
}

export default CONFIG
