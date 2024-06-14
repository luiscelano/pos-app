import React from 'react'
import { Grid } from '@mui/material'
import withProducts from 'src/containers/products/withProducts'
import { ProductsList } from 'src/components/ProductsList'
import CartSummary from 'src/components/CartSummary'

const Home = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12} order={{ xs: 2, md: 1 }}>
        <ProductsList products={props.products} />
      </Grid>
      <Grid item md={4} xs={12} order={{ xs: 1, md: 2 }}>
        <CartSummary loading={props.isPlacingOrder} placeOrder={props.placeOrder} />
      </Grid>
    </Grid>
  )
}

export default withProducts(Home)
