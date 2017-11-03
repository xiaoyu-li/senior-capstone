import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';
import Typography from 'material-ui/Typography';

const Welcome = (props) => {
  const { classes, username, quote } = props;
  return (
    <div className={classes.welcome}>
      <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <Typography type="display2" noWrap color="inherit" gutterBottom>
          {`Hi, ${username}!`}
        </Typography>
        <Typography type="title" noWrap color="inherit">
          {`${quote}`}
        </Typography>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string,
  quote: PropTypes.string,
};

Welcome.defaultProps = {
  username: 'Guest',
  quote: 'Opps: A random quote should be displayed',
};

const styles = () => ({
  welcome: {
    position: 'absolute',
    textAlign: 'left',
    color: '#fff',
    display: 'table',
    height: '100%',
    left: 680,
    top: 0,
  },
});
export default withStyles(styles)(Welcome);
