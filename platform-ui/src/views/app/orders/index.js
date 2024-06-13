import { Container } from '@mui/material'
import React from 'react'
import OrdersList from 'src/components/OrdersList'
import withOrders from 'src/containers/orders/withOrders'

const Orders = (props) => {
  return (
    <Container maxWidth="sm">
      <OrdersList orders={props.orders} />
    </Container>
  )
}

export default withOrders(Orders)
