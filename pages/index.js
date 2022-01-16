import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import data from '../utils/data';
import useStyles from '../utils/styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography component={'h1'} variant="h1">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions className={classes.addToCartButton}>
                  <Typography className={classes.priceComponent}>
                    ${product.price}
                  </Typography>
                  <Button size="large" color="secondary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
