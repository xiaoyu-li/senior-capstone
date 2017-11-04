import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui-icons/Home';
import Dashboard from 'material-ui-icons/Dashboard';
import Settings from 'material-ui-icons/Settings';
import { Link } from 'react-router-dom';

const IconNavigation = (props) => {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <Link to="/">
        <IconButton aria-label="change theme" color="contrast">
          <Home />
        </IconButton>
      </Link>
      <Link to="/edit-chakras">
        <IconButton aria-label="change theme" color="contrast">
          <Dashboard />
        </IconButton>
      </Link>
      <div className={classes.grow} />
      <IconButton aria-label="change theme" color="contrast">
        <Settings />
      </IconButton>
    </div>
  );
};

IconNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  wrapper: {
    position: 'absolute',
    left: 12,
    top: 135,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  grow: {
    flex: '1 1 auto',
  },
});
export default withStyles(styles)(IconNavigation);
