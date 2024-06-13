import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import * as styles from './styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useDispatch } from 'react-redux'
import * as cartActions from 'src/redux/cart/actions'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const addProductElementToCart = () => dispatch(cartActions.addProductElementToCart(item))
  const removeProductElementFromCart = () => dispatch(cartActions.removeProductElementFromCart(item))
  return (
    <Grid item xs={12} md={12}>
      <styles.CartItemContainer>
        <styles.CartItemLeading>
          <img src={item.imageURL} alt={item.title} style={{ width: '50px' }}></img>
          <Typography variant="h6">{item.title}</Typography>
        </styles.CartItemLeading>
        <styles.CartItemTrailing>
          <styles.CartItemButtonsLayout>
            <Button onClick={removeProductElementFromCart}>
              <RemoveIcon fontSize="medium" />
            </Button>
            <Typography variant="body1">{item.quantity}</Typography>
            <Button onClick={addProductElementToCart}>
              <AddIcon fontSize="medium" />
            </Button>
          </styles.CartItemButtonsLayout>
          <Typography variant="caption">{`${item.quantity} x Q${item.price.toFixed(2)}`}</Typography>
        </styles.CartItemTrailing>
      </styles.CartItemContainer>
    </Grid>
  )
}

const CartItems = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(items || []).map((item, index) => (
        <CartItem key={`cart-item-${index}`} item={item} />
      ))}
    </Grid>
  )
}

export default CartItems
