import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement,
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    /* eslint-disable global-require */
    const NextApp = require('./components/App').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElement,
    );
  });
}
