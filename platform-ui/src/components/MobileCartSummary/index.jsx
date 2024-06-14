import React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import CartSummary from '../CartSummary'
import { useSelector } from 'react-redux'
import * as cartSelectors from 'src/redux/cart/selectors'

const drawerBleeding = 56

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800]
}))

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}))

const MobileCartSummary = ({ loading, placeOrder, ...props }) => {
  const { window } = props
  const [open, setOpen] = React.useState(false)
  const cartItems = useSelector(cartSelectors.getCartItemsSelector)
  const orderTotal = Array.from(cartItems || []).reduce((sum, current) => sum + current.price * current.quantity, 0)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(80% - ${drawerBleeding}px)`,
            overflow: 'visible'
          }
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true
        }}>
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0
          }}>
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>{`Total Q${orderTotal.toFixed(2)}`}</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            overflow: 'auto'
          }}>
          <CartSummary loading={loading} placeOrder={placeOrder} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}

export default MobileCartSummary
