import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import CardHeader from './CardHeader';
import CardView from './CardView';
import SearchField from './SearchField';

const useStyles = makeStyles({
  root: {
    borderRadius: 10,
    boxShadow: '1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)'
  },
  container: {
    maxHeight: 700
  },
  loading: {
    '& svg': {
      width: 50
    }
  }
});

const CardViewList = ({ leads, loading }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <SearchField />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ background: '#fff', padding: '0px 16px', border: 0 }}
              >
                <CardHeader />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (
              leads?.length ? (
                leads
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell style={{ padding: '0px 16px', border: 0 }}>
                          <CardView viewData={row ? row : null} />
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell
                    style={{
                      borderBottom: 0,
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    No PR's found for selected branch
                  </TableCell>
                </TableRow>
              )
            ) : (
              <TableRow>
                <TableCell
                  style={{
                    borderBottom: 0,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <ReactLoading
                    type="spinningBubbles"
                    color="#FE768A"
                    className={classes.loading}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        component="div"
        count={leads.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
  loading: state.leads.loading
});

export default connect(mapStateToProps, {})(CardViewList);
