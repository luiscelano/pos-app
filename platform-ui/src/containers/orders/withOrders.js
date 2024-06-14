import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'
import useQueryParams from 'src/utils/useQueryParams'

const withOrders = (Component) => (props) => {
  const query = useQueryParams()
  const [isLoading, setIsLoading] = useState(false)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null)
  const ordersRef = useRef(false)
  const orderId = query.get('orderId')

  const getOrders = useCallback(async () => {
    try {
      const response = await httpClient.get('/orders')
      if (response.status === 200) {
        setOrders(response.data)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [])

  useEffect(() => {
    if (ordersRef.current) return
    ordersRef.current = true
    setIsLoading(true)
    getOrders()
  }, [getOrders])

  useEffect(() => {
    if (isLoading && (orders || errorState.failed)) setIsLoading(false)
    if (orderId) {
      setSelectedOrder(orders.find((order) => order.orderId === orderId))
    }
  }, [orders, errorState, isLoading])

  useEffect(() => {
    if (!orderId) setSelectedOrder(null)
    else if (orderId) {
      setSelectedOrder(orders.find((order) => order.orderId === orderId))
    }
  }, [orderId])

  const componentProps = { ...props, orders, selectedOrder }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withOrders
