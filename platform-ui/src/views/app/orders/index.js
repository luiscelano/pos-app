import { Container, Grid, SwipeableDrawer, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderSummary from 'src/components/OrderSummary'
import OrdersList from 'src/components/OrdersList'
import withOrders from 'src/containers/orders/withOrders'

const Orders = ({ orders, selectedOrder }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const navigate = useNavigate()

  return (
    <Container maxWidth={selectedOrder ? 'lg' : 'sm'} sx={{ padding: matches ? 'auto' : 0 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={selectedOrder ? 6 : 12}>
          <OrdersList orders={orders} />
        </Grid>
        {selectedOrder && matches && (
          <Grid item xs={12} md={6}>
            <Grid container position="fixed">
              <div style={{ width: '35vw' }}>
                <OrderSummary order={selectedOrder} />
              </div>
            </Grid>
          </Grid>
        )}
        {selectedOrder && !matches && (
          <SwipeableDrawer
            anchor="bottom"
            open={Boolean(selectedOrder)}
            onOpen={() => {}}
            onClose={() => navigate('/app/orders')}>
            <OrderSummary order={selectedOrder} />
          </SwipeableDrawer>
        )}
      </Grid>
    </Container>
  )
}

export default withOrders(Orders)
