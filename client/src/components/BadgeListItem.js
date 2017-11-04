import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles/';
import { Link } from 'react-router-dom';

const BadgeListItem = (props) => {
  const { classes, label, type, progress, onClick } = props;
  return (
    <Link className={classes.panel} to={`/chakras/${label}`} onClick={e => onClick(e)}>
      <h1 className={classes.label}>{label}</h1>
      <h2 className={classes.type}>{type}</h2>
      <span className={classes.progress}>{`${progress}%`}</span>
    </Link>
  );
};

BadgeListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* ==============================================================
 * styles
 * ============================================================== */

const sText = {
  position: 'absolute',
  top: '50%',
};

const sTransition = {
  transition: 'all 0.4s ease',
};

const styles = theme => ({
  panel: {
    color: '#222',
    extend: sTransition,
    fontFamily: '"Roboto", sans-serif',
    background: theme.palette.common.fullWhite,
    borderBottom: '1px solid #f5f5f5',
    width: '100%',
    position: 'relative',
    flex: 1,
    '&:hover': {
      cursor: 'pointer',
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
    extend: [sTransition, sText],
    left: '5vh',
    marginTop: '-2vh',
    fontSize: '4vh',
    lineHeight: '4vh',
    fontWeight: 300,
  },
  type: {
    extend: ['sharedTransition', sText],
    left: '5vh',
    marginTop: '2vh',
    fontSize: 0,
    lineHeight: '2vh',
    fontWeight: 100,
  },
  progress: {
    extend: ['sharedTransition', sText],
    right: '5vh',
    fontSize: '1.5vh',
    lineHeight: '1.5vh',
    fontWeight: 500,
  },
});
export default withStyles(styles)(BadgeListItem);
