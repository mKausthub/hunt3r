import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
// import Logo from '../../components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64,
    background: '#FE768A'
  },
  logo: {
    display: 'flex',
    width: 300,
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 700,
    marginRight: theme.spacing(1),
    color: 'white',
    fontSize: 20
  }
}));

function TopBar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/" className={classes.logo}>
          {/* <Logo />  */}
          hunt3r.io
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
