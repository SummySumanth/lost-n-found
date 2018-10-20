import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/index';
import Routes from './routes';
import thunk from 'redux-thunk';
import '../scss/start.scss';



import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      secondary: {
        light: '#F5F5F5',
        main: '#9E9E9E',
        dark: '#616161',
        contrastText: '#212121'
      },
      primary: {
        light: '#FFCDD2',
        main: '#F44336',
        dark: '#D32F2F',
        contrastText: '#fff',
      },
    },
  });



const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });


const store = createStore(
    allReducers,
    applyMiddleware(thunk ,loggerMiddleware)
);
    
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Routes />
        </MuiThemeProvider>
    </Provider>
    ,document.getElementById('root')
);
