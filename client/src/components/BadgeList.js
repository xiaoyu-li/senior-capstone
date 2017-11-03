import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';
import grey from 'material-ui/colors/grey';

const BadgeList = (props) => {
  const { classes, children } = props;
  return <div className={classes.menu}>{children}</div>;
};

BadgeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  menu: {
    borderRadius: '5px 5px 0 0',
    background: grey[100],
    left: 80,
    top: 150,
    bottom: 0,
    width: 400,
    position: 'fixed',
    display: 'flex',
    zIndex: 1, // avoid semi-transparent color layer over background-image
    flexDirection: 'column',
    overflow: 'hidden',
  },
});
export default withStyles(styles)(BadgeList);
