import React from 'react'
import { Grid, useMediaQuery } from '@mui/material'
import withProducts from 'src/containers/products/withProducts'
import { ProductsList } from 'src/components/ProductsList'
import CartSummary from 'src/components/CartSummary'
import { useTheme } from '@emotion/react'
import MobileCartSummary from 'src/components/MobileCartSummary'
import * as cartSelectors from 'src/redux/cart/selectors'
import { useSelector } from 'react-redux'

const Home = (props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const cartItems = useSelector(cartSelectors.getCartItemsSelector)

  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <ProductsList products={props.products} />
        <br />
        <br />
        <br />
      </Grid>
      {matches && (
        <Grid item md={4} xs={12}>
          <CartSummary loading={props.isPlacingOrder} placeOrder={props.placeOrder} />
        </Grid>
      )}
      {!matches && cartItems.length && (
        <MobileCartSummary loading={props.isPlacingOrder} placeOrder={props.placeOrder} />
      )}
    </Grid>
  )
}

export default withProducts(Home)
