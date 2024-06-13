import { Grid } from '@mui/material'
import React from 'react'
import OrderItem from '../OrderItem'

const OrdersList = ({ orders }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(orders || []).map((order, index) => (
        <OrderItem order={order} key={`order-item-${index}`} />
      ))}
    </Grid>
  )
}

export default OrdersList
