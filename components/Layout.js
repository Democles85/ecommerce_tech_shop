import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Login, ShoppingCart } from '@mui/icons-material';
import Cookies from 'js-cookie';
import Head from 'next/head';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';

function Layout({ description, title, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3b3b3b',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Techocles` : `Techocles`}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href={'/'} passHref>
              <Link className={classes.brand_link}>
                <Typography className={classes.brand}>Techocles</Typography>
              </Link>
            </NextLink>
            <div className={classes.flexGrow} />
            <Switch
              checked={darkMode}
              onChange={darkModeChangeHandler}
            ></Switch>
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
      </ThemeProvider>
    </div>
  );
}

export default Layout;
