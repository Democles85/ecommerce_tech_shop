import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Techocles</title>
      </Head>
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
