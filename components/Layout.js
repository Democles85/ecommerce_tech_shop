import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

function Layout({ children }) {
  const classes = useStyles();
  /*TODO:
      1. Add A Link to Homepage
      2. Add a Cart Link
      3. Add a Login Link
      using:
      NextLink and Link
  */
  return (
    <div>
      <Head>
        <title>Techocles</title>
      </Head>
      {/* insert here */}
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Techocles</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          Copyright &copy; {new Date().getFullYear()} Techocles All Rights
          Reserved
        </Typography>
      </footer>
    </div>
  );
}

export default Layout;
