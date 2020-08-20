import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/prism.css';
import App from './App';
import 'nprogress/nprogress.css';
import { SettingsProvider } from './context/SettingsContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import { restoreSettings } from './utils/settings';

const rootElement = document.getElementById('root');

const settings = restoreSettings();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </Provider>,
  rootElement
);
