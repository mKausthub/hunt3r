import React from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import Routes from './Routes';
import Alerts from './layouts/Alerts';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import useSettings from './hooks/useSettings';
import { createTheme } from './theme';

//Alert Options
const alertOptions = {
  position: 'top center',
  timeout: 3000
};

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
);

const history = createHashHistory();

function App() {
  useStyles();

  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router history={history}>
          <Alerts />
          <Routes />
        </Router>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
