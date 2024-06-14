import { Button, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import * as cartSelectors from 'src/redux/cart/selectors'
import CartItems from '../CartItems'
import * as styles from './styles'
import { BeatLoader } from 'react-spinners'

const CartSummary = ({ placeOrder, loading }) => {
  const cartItems = useSelector(cartSelectors.getCartItemsSelector)

  const orderTotal = Array.from(cartItems || []).reduce((sum, current) => sum + current.price * current.quantity, 0)

  return (
    <Paper variant="outlined">
      <Grid container padding={2} spacing={3}>
        <Grid item xs={12} md={12}>
          {cartItems.length ? (
            <CartItems items={cartItems} />
          ) : (
            <Grid container justifyContent="center">
              <Typography variant="h6">El carrito está vacío</Typography>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container>
            <Grid item xs={12}>
              <styles.OrderSummaryContainer>
                <Typography variant="h5">Subtotal</Typography>
                <Typography variant="h5">{`Q${orderTotal.toFixed(2)}`}</Typography>
              </styles.OrderSummaryContainer>
            </Grid>
            <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              {!loading ? (
                <Button
                  sx={{ width: '100%' }}
                  size="large"
                  variant="contained"
                  disabled={!cartItems.length}
                  disableElevation
                  onClick={() => placeOrder(cartItems)}>
                  Crear orden
                </Button>
              ) : (
                <BeatLoader color={'#f9a825'} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CartSummary
