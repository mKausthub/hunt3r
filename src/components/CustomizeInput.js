import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: '150px'
  },
  input: {
    width: 'calc(100% - 150px)',
    marginRight: '20px',
    '& input': {
      padding: 5
    }
  }
}));

const CustomizeInput = ({ label, value, onChange }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.title}>{label}:</Grid>
      <TextField
        variant="outlined"
        className={classes.input}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </Grid>
  );
};

export default CustomizeInput;
