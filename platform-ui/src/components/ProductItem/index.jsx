import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as cartActions from 'src/redux/cart/actions'

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const addProductToCart = () => dispatch(cartActions.addProductToCart(product))

  return (
    <Grid item md={4} xs={6}>
      <Card elevation={0}>
        <CardMedia sx={{ height: 240, objectFit: 'contain' }} image={product.imageURL} title="green iguana" />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3
            }}
            variant="body2"
            component="div">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ width: '100%' }} size="small" variant="contained" disableElevation onClick={addProductToCart}>
            Agregar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
