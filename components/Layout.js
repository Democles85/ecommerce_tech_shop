import {
  AppBar,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Login, ShoppingCart } from '@mui/icons-material';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import useStyles from '../utils/styles';

function Layout({ description, title, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Techocles` : `Techocles`}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href={'/'} passHref>
            <Link className={classes.brand_link}>
              <Typography className={classes.brand}>Techocles</Typography>
            </Link>
          </NextLink>
          <div className={classes.flexGrow} />
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <ShoppingCart />
          </IconButton>
          <IconButton
            component={Link}
            to="/login"
            aria-label="Login to the page"
            color="inherit"
          >
            <Login />
          </IconButton>
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
