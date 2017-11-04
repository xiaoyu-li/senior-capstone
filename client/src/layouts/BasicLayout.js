import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BackgroundImg from '../components/BackgroundImg';
import IconNavigation from '../components/IconNavigation';
import HomePage from '../routes/HomePage';
import EditPage from '../routes/EditPage';

class BasicLayout extends Component {
  state = { drawerOpen: false };

  handleSidebarClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleSidebarToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <Header onClickMenu={this.handleSidebarToggle} username="ML" />
        <BackgroundImg />
        <IconNavigation />
        <Sidebar open={this.state.drawerOpen} onRequestClose={this.handleSidebarClose} />
        <Route exact path="/" component={HomePage} />
        <Route path="/chakras/:label" component={EditPage} />
      </div>
    );
  }
}

const styles = () => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
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
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
  },
  wrapper: {
    position: 'relative',
    height: '100vh',
  },
});

export default withStyles(styles)(BasicLayout);
