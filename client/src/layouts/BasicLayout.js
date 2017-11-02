import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class BasicLayout extends Component {
  state = { drawerOpen: false };

  handleSidebarClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleSidebarToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    return (
      <div>
        <Header onClickMenu={this.handleSidebarToggle} />
        <Sidebar open={this.state.drawerOpen} onRequestClose={this.handleSidebarClose} />
      </div>
    );
  }
}

const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
      '@media print': {
        background: theme.palette.common.white,
      },
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
    },
  },
  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
});

export default withStyles(styles)(BasicLayout);
