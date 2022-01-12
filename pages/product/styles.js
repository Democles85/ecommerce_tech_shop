import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
  productName: {
    fontWeight: 'bold',
    fontFamily: 'Be Vietnam Pro',
    fontSize: 18,
  },
  productInfo: {
    fontFamily: 'Be Vietnam Pro',
  },
  addToCart: {
    fontFamily: 'Be Vietnam Pro',
  },
});

export default useStyles;
