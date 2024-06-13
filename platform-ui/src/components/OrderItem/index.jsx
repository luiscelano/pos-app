import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import * as styles from './styles'
import { dateFormatter } from 'src/utils/dateFormatter'

const timeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

const OrderItem = ({ order }) => {
  return (
    <Grid item md={12}>
      <Card
        elevation={0}
        sx={{
          background: 'black',
          color: 'white',
          cursor: 'pointer',
          ':hover': {
            background: '#424242'
          },
          ':active': {
            background: 'black'
          }
        }}>
        <CardContent>
          <styles.RowContainer>
            <styles.ColumnContainer alignItems="flex-start">
              <Typography variant="h4">{`Orden no #${order.orderNumber}`}</Typography>
              <Typography variant="caption" sx={{ fontWeight: '700' }}>
                {dateFormatter(order.createdAt)}
              </Typography>
            </styles.ColumnContainer>
            <styles.ColumnContainer alignItems="flex-end">
              <styles.StatusElement status={order.status}>{order.status}</styles.StatusElement>
              <Typography variant="body1">{`Q.${order.orderTotal.toFixed(2)}`}</Typography>
            </styles.ColumnContainer>
          </styles.RowContainer>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default OrderItem
