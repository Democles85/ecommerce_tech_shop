import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#222222',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  brand_link: {
    textDecoration: 'none!important',
  },
  flexGrow: {
    flexGrow: 1,
  },
  productNotFound: {
    position: 'fixed',
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  productInfo: {
    fontFamily: 'Be Vietnam Pro',
  },
  addToCart: {
    fontFamily: 'Be Vietnam Pro',
  },
  priceComponent: {
    fontFamily: 'Be Vietnam Pro',
  },
  addToCartButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default useStyles;
