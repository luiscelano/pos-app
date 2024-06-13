import React from 'react'
import { Grid } from '@mui/material'
import withProducts from 'src/containers/products/withProducts'
import { ProductsList } from 'src/components/ProductsList'

const Home = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <ProductsList products={props.products} />
      </Grid>
      <Grid item md={4} xs={12}>
        cart summary
      </Grid>
    </Grid>
  )
}

export default withProducts(Home)
