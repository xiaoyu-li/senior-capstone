import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'material-ui-icons/Search';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  wrapper: {
    height: 50,
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    borderRadius: 4,
    background: '#f5f5f5',
    '& $input': {
      transition: 'all 100ms ease-in',
      width: 500,
      '&:focus': {
        border: '1px solid rgba(0,0,0,0.12)',
        borderRadius: 4,
        boxShawdow: '0 1px 1px rgba(0,0,0,0.24)',
        background: theme.palette.common.fullWhite,
      },
    },
  },
  icon: {
    color: theme.palette.common.lightBlack,
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 9}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
});

const Search = (props) => {
  const { classes } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.search}>
        <SearchIcon className={classes.icon} />
      </div>
      <input id="docsearch-input" placeholder="Search your goal" className={classes.input} />
    </div>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
