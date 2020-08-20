import React, { useState } from 'react';
import { makeStyles, Button, Grid, Hidden } from '@material-ui/core';
import { CSVLink } from 'react-csv';
import CustomizeInput from './CustomizeInput';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getLeads } from '../redux/actions/leadActions';
import { createMessage } from '../redux/actions/messages';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px 16px'
  },
  cardUnit: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    width: '100%',
    marginTop: 25
  },
  funtions: {
    padding: '20px 0px'
  },
  leftSide: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& button': {
      background: 'transparent',
      border: '2px solid #C1E7DE',
      borderRadius: 20,
      textTransform: 'none'
    }
  },
  findResult: {
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center'
  },
  rightSide: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& button': {
      borderRadius: 20,
      textTransform: 'none',
      '& a': {
        textDecoration: 'none',
        color: 'inherit'
      }
    }
  }
}));

const SearchField = ({ getLeads, leads }) => {
  const classes = useStyles();
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCompanyName = (e) => {
    setCompany(e.target.value);
  };

  const handleGen = async () => {
    if (!company)
      return await dispatch(createMessage('Please input the company name'));
    if (!title)
      return await dispatch(createMessage('Please input the work title'));
    getLeads();
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={7} className={classes.cardUnit}>
        Finds leads who ...
      </Grid>
      <Grid item xs={12} sm={12} md={5} className={classes.cardUnit}>
        To do this in the search box
      </Grid>
      <Grid item xs={12} sm={12} md={7} className={classes.cardUnit}>
        <CustomizeInput
          label="work at companies"
          onChange={handleCompanyName}
          value={company}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={5} className={classes.cardUnit}>
        enter company name followed by space: google facebook airbnb
      </Grid>
      <Grid item xs={12} sm={12} md={7} className={classes.cardUnit}>
        <CustomizeInput
          label="with titles"
          onChange={handleTitle}
          value={title}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={5} className={classes.cardUnit}>
        enter job titles: "sales manager" "sales rep" "ceo" "sales consultant"
      </Grid>
      <Grid container item xs={12} className={classes.funtions}>
        <Grid item xs={6} className={classes.leftSide}>
          <Button variant="contained" onClick={handleGen}>
            Generate Leads
          </Button>
          <Hidden smDown>
            <Grid className={classes.findResult}>
              {leads?.length ? leads?.length + ' results found' : ''}
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs={6} className={classes.rightSide}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SaveAltIcon />}
            disabled={!leads?.length}
          >
            <CSVLink data={leads}>Export CSV</CSVLink>
          </Button>
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} sm={12} className={classes.findResult}>
            <span style={{ marginTop: 20 }}>
              {leads?.length ? leads?.length + ' results found' : ''}
            </span>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(SearchField);
