import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#222222',
    '& a': {
      color: '#ffffff',
      marginLeft: 10
    }
  },
  main: {
    minHeight: '80vh'
  },
  footer: {
    textAlign: 'center'
  }
})

export default useStyles