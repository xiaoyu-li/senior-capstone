import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const Sidebar = (props) => {
  const { classes, open, onRequestClose } = props;

  // application name
  const NAME = 'Badging System';

  const drawer = (
    <div className={classes.nav}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} type="title" color="inherit">
          {NAME}
        </Typography>
      </Toolbar>
    </div>
  );

  return (
    <div className={classes.drawer}>
      <Drawer
        classes={{ paper: classes.paper }}
        onRequestClose={onRequestClose}
        ModalProps={{ keepMounted: true }}
        open={open}
        type="temporary"
      >
        {drawer}
      </Drawer>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

const styles = theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary[500],
    },
  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  anchor: {
    color: theme.palette.text.secondary,
  },
  [theme.breakpoints.up('lg')]: {
    drawer: {
      width: '250px',
    },
  },
});

export default withStyles(styles)(Sidebar);
