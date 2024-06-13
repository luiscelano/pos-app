import { Container, Grid } from '@mui/material'
import React from 'react'
import OrderItem from '../OrderItem'

const OrdersList = ({ orders }) => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        {Array.from(orders || []).map((order, index) => (
          <OrderItem order={order} key={`order-item-${index}`} />
        ))}
      </Grid>
    </Container>
  )
}

export default OrdersList
