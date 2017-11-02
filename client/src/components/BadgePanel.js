import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';

const BadgePanel = (props) => {
  const { classes, label, type, progress } = props;
  return (
    <div className={classes.panel}>
      <h1 className={classes.label}>{label}</h1>
      <h2 className={classes.type}>next goal info</h2>
      <span className={classes.progress}>{`${progress}%`}</span>
    </div>
  );
};

BadgePanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  panel: {
    fontFamily: '"Roboto", sans-serif',
    background: theme.palette.common.fullWhite,
    borderBottom: '1px solid #f5f5f5',
    width: '100%',
    position: 'relative',
    flex: 1,
    transition: 'all 0.4s ease',
    transitionDelay: '0s',
    '&:hover': {
      flex: 2,
      '& $label': {
        left: '10vh',
        marginTop: '-3.75vh',
      },
      '& $type': {
        left: '10vh',
        marginTop: '1.75vh',
        fontSize: '2vh',
      },
      '& $progress': {
        marginTop: '2vh',
      },
    },
  },
  label: {
    position: 'absolute',
    transition: 'all 0.4s ease',
    transitionDelay: 0,
    left: '5vh',
    top: '50%',
    marginTop: '-2vh',
    fontSize: '4vh',
    lineHeight: '4vh',
    fontWeight: 300,
  },
  type: {
    position: 'absolute',
    transition: 'all 0.4s ease',
    transitionDelay: 0,
    left: '5vh',
    top: '50%',
    marginTop: '2vh',
    fontSize: '0',
    lineHeight: '2vh',
    fontWeight: 100,
  },
  progress: {
    position: 'absolute',
    transition: 'all 0.4s ease',
    transitionDelay: 0,
    top: '50%',
    right: '5vh',
    fontSize: '1.5vh',
    lineHeight: '1.5vh',
    fontWeight: 500,
  },
});
export default withStyles(styles)(BadgePanel);
