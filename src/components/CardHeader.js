import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    height: 60,
    borderBottom: '1px solid #93989E'
  },
  cardUnit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#263238',
    fontWeight: 600
  }
}));

const CardHeader = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} className={classes.cardUnit}>
        Name
      </Grid>
      <Grid item xs={3} className={classes.cardUnit}>
        Company
      </Grid>
      <Grid item xs={3} className={classes.cardUnit}>
        Title
      </Grid>
      <Grid item xs={3} className={classes.cardUnit}>
        Email
      </Grid>
      <Grid item xs={1} className={classes.cardUnit}></Grid>
    </Grid>
  );
};

export default CardHeader;
