# react-client-starter

React web client starter project

## Stack components

- Webpack
- Babel
- React
- React Router
- React Responsive Utils
- Helmet
- Styled Components
- Apollo
- Ramda
- Date fns
- Normalize.css
- Sentry
- Jest + Enzyme
- Cypress
- Storybook
- ESLint + Airbnb styleguide
- Stylelint
- Prettier

## Setup

- Clone the repository
- `yarn install`

Recommended:

- Install the following VSCode plugins:
  - `ESLint`
  - `Prettier - Code formatter`
  - `Prettier ESLint`
  - `Stylelint`
- In VSCode preferences (in both _User_ and _Workspace_ tabs):
  - Set _Editor: Default Formatter_ to `Prettier - Code formatter`
  - Set _Editor: Tab Size_ to `2`
  - Check _Editor: Format On Save_
- Setup Sentry (specify DSN key in `config/environment.js`)
- Configure Apollo Studio ([docs][apollo-studio-config])

## Config

- In `package.json`, replace values of `name`, `description` and `repository` appropriately
- Find & replace `[appName]` instances by your application name

## Scripts

- Run in dev mode: `yarn start`
- Build for test: `yarn run build:test`
- Build for prod: `yarn run build:prod`
- Serve the test/prod bundle locally: `yarn run serve`
- Run unit tests: `yarn run test`
- Run unit tests in watch mode: `yarn run test:watch`
- Generate test coverage report: `yarn run test:coverage`
- Run e2e tests: `yarn run cypress`
- Run storybook in dev: `yarn run storybook`
- Build storybook package: `yarn run build-storybook`
- Lint JS code: `yarn run lint:js`
- Lint CSS code: `yarn run lint:css`

## Project structure & conventions

### Components folder

The `src/components` folder is where most of the development will occur. It contains 3 different folders:

- `foundation`: components that are related to the foundation of the application (ex: layout, routes, global styles and theme, ...)
- `pages`: pages of the application (ex: home, about, ...)
- `toolbox`: reusable components (ex: Calendar, Popup, ...)

### Colocation

Place related assets in the same folder. Ex, in `src/components/pages/Home`:

- `index.jsx`, so it can be easily imported (import Home from 'pages/Home')
- `images/logo.png`, for a local image
- `Home.test.js`, for a local test

### Aliases

To make development easier, several folders have aliases, such as `toolbox` and `utils`. It's therefore not required to provide the relative path to those folders. Ex:

- `import { Calendar } from 'toolbox'`
- `import { shallowRender } from 'utils/testUtils'`

## Git pre-commit hook

To ensure that the codebase stays high quality, a pre-commit hook will run before every commit to perform 4 quality checks on the changeset:

1. **ESLint**: ensures that JS code matches the Airbnb style guide
2. **Stylelint**: ensures that CSS code matches recommended conventions
3. **Prettier**: formats the code to make it easy to read and maintain
4. **Unit tests**: ensures that related unit tests are passing

[apollo-studio-config]: https://www.apollographql.com/docs/tutorial/client/
