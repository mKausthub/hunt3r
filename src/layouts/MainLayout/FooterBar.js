import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FE768A',
    top: 'auto',
    bottom: 0,
    height: 50
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 200,
    fontSize: 15,
    height: '100%',
    color: 'white'
  }
}));

function FooterBar({ className, ...rest }) {
  const classes = useStyles();
  return (
    <AppBar
      className={clsx(classes.root, className)}
      position="fixed"
      {...rest}
    >
      <Grid className={classes.toolbar}>
        For any questions or feedback please contact me.&nbsp;
        <b>jupiter.programmer@gmail.com</b>
      </Grid>
    </AppBar>
  );
}

FooterBar.propTypes = {
  className: PropTypes.string
};

export default FooterBar;
