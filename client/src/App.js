import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import BasicLayout from './layouts/BasicLayout';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    accent: pink,
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <BasicLayout />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
