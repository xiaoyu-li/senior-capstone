import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import Search from './Search';

const Header = (props) => {
  // page title
  const title = 'Home';
  const { classes, onClickMenu } = props;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.navIcon} onClick={onClickMenu}>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} type="title" noWrap>
          {title}
        </Typography>
        <div className={classes.grow} />
        <Search />
        <Button className={classes.button} color="primary" dense>
          Create
        </Button>
        <Button className={classes.button} color="primary" dense>
          Upload
        </Button>
        <div className={classes.grow} />
        <Tooltip title="Toggle light/dark theme" enterDelay={300}>
          <IconButton aria-label="change theme">
            <LightbulbOutline />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

const styles = theme => ({
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    background: 'white',
    transition: theme.transitions.create('width'),
    '@media print': {
      position: 'absolute',
    },
  },
  button: {
    marginLeft: 2 * theme.spacing.unit,
    '&:hover': {
      background: 'none',
    },
  },
});

export default withStyles(styles)(Header);
