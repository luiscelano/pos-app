import { Button, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import * as cartSelectors from 'src/redux/cart/selectors'
import CartItems from '../CartItems'
import * as styles from './styles'

const CartSummary = ({ placeOrder, loading }) => {
  const cartItems = useSelector(cartSelectors.getCartItemsSelector)

  const orderTotal = Array.from(cartItems || []).reduce((sum, current) => sum + current.price * current.quantity, 0)

  return (
    <Paper variant="outlined">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          {cartItems.length ? <CartItems items={cartItems} /> : <div>el carrito esta vacio</div>}
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
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: 'flex', padding: '15px', flexDirection: 'row', justifyContent: 'center' }}>
              <Button
                sx={{ width: '100%' }}
                size="large"
                variant="contained"
                disabled={!cartItems.length || loading}
                disableElevation
                onClick={() => placeOrder(cartItems)}>
                Crear orden
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CartSummary
