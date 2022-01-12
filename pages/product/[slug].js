import { useRouter } from 'next/router';
import React from 'react';
import data from '../../utils/data';
import useStyles from '../../utils/styles';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import {
  Button,
  Card,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { ArrowBack } from '@mui/icons-material';
import Image from 'next/image';

function ProductScreen() {
  const router = useRouter();
  const classes = useStyles();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return (
      <div className={classes.productNotFound}>
        <p>❗ Product Not Found ❗</p>
      </div>
    );
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href={'/'} passHref>
          <IconButton aria-label="Back to products">
            <ArrowBack />
          </IconButton>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={360}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component={'h1'} className={classes.productName}>
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.productInfo}>
                <b>Category: </b> {product.category}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.productInfo}>
                <b>Brand: </b> {product.brand}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.productInfo}>
                <b>Rating: </b> {product.rating} stars of ({product.numReviews})
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.productInfo}>
                <b>Description: </b>
                {product.description}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="inherit">
                  <Typography className={classes.addToCart}>
                    Add to cart{' '}
                  </Typography>
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProductScreen;
