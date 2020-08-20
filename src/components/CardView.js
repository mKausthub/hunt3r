import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(() => ({
  root: {
    borderBottom: '1px solid #E8E9EB',
    padding: '10px 0px'
  },
  cardUnit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  avatar: {
    width: 30,
    height: 30,
    backgroundColor: '#E8E9EB',
    color: '#797E86',
    textTransform: 'uppercase'
  },
  nameLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      marginLeft: 10,
      fontSize: 20,
      color: '#E8E8EA'
    }
  }
}));

const CardView = ({ viewData }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} className={classes.cardUnit}>
        {viewData.name}
      </Grid>
      <Grid item xs={3} className={classes.cardUnit}>
        {viewData.company}
      </Grid>
      <Grid item xs={3} className={classes.cardUnit}>
        {viewData.title}
      </Grid>
      <Grid item xs={3} className={classes.cardUnit}>
        {viewData.email}
      </Grid>
      <Grid item xs={1} className={classes.cardUnit}>
        <Link href={viewData.avatar_url} className={classes.nameLink}>
          <Avatar
            alt={viewData.name}
            src={viewData.avatar_url}
            className={classes.avatar}
          />
          <ArrowForwardIosIcon />
        </Link>
      </Grid>
    </Grid>
  );
};

export default CardView;
