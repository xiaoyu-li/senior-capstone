import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';
import Typography from 'material-ui/Typography';

const Welcome = (props) => {
  const { classes } = props;
  return (
    <div className={classes.welcome}>
      <div style={{ display: 'table-cell', 'vertical-align': 'middle' }}>
        <Typography type="display2" noWrap color="inherit" gutterBottom>
          Hi, $username!
        </Typography>
        <Typography type="title" noWrap color="inherit">
          placeholder placeholder placeholder placeholder.
        </Typography>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  welcome: {
    color: '#fff',
    display: 'table',
    height: '100%',
    left: 96,
    top: 0,
    marginLeft: 480,
    minHeight: 400,
    minWidth: 400,
    position: 'absolute',
    textAlign: 'left',
  },
});
export default withStyles(styles)(Welcome);
