import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Notifications from 'material-ui-icons/Notifications';
import Settings from 'material-ui-icons/Settings';

import deepPurple from 'material-ui/colors/deepPurple';
import Search from './Search';

const Header = (props) => {
  // page title
  const title = 'Badging System';
  const { classes, onClickMenu } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton onClick={onClickMenu} color="contrast">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} type="title" noWrap color="inherit">
          {title}
        </Typography>
        <div className={classes.grow} />
        <Tooltip title="Notification" enterDelay={300}>
          <IconButton aria-label="change theme" color="contrast">
            <Notifications />
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings" enterDelay={300}>
          <IconButton aria-label="change theme" color="contrast">
            <Settings />
          </IconButton>
        </Tooltip>
        <Avatar className={classes.avatar}>ML</Avatar>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

const styles = () => ({
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
  },

  avatar: {
    width: 35,
    height: 35,
    fontSize: 14,
    marginLeft: 5,
    color: '#fff',
    background: deepPurple[500],
  },
});

export default withStyles(styles)(Header);
