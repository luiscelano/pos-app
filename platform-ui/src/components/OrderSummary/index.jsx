import { Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import * as styles from './styles'

const OrderSummary = ({ order }) => {
  return (
    <Paper variant="outlined">
      <Grid container padding={2}>
        <Grid item xs={12} md={12}>
          <Grid container justifyContent="center">
            <Typography variant="h5">{`Orden no #${order.orderNumber}`}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container padding={2}>
            {Array.from(order.items || []).map((orderItem, index) => (
              <Grid item xs={12} key={`selected-order-item-${index}`}>
                <styles.OrderItemContainer>
                  <img src={orderItem.imageURL} alt={orderItem.title} style={{ width: '50px' }}></img>
                  <styles.OrderItemTitleContainer>
                    <Typography variant="h6">{orderItem.title}</Typography>
                  </styles.OrderItemTitleContainer>
                  <Typography variant="h6">{`${orderItem.quantity} x Q${orderItem.price.toFixed(2)}`}</Typography>
                </styles.OrderItemContainer>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <styles.OrderTotalContainer>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">{`Q${order.orderTotal.toFixed(2)}`}</Typography>
          </styles.OrderTotalContainer>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default OrderSummary
