import { Grid } from '@mui/material'
import React from 'react'
import { ProductItem } from '../ProductItem'

export const ProductsList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(products || []).map((product) => (
        <ProductItem product={product} key={product.productId} />
      ))}
    </Grid>
  )
}
