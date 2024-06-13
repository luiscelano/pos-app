import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as cartActions from 'src/redux/cart/actions'

const withProducts = (Component) => (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [products, setProducts] = useState(null)
  const productsRef = useRef(false)

  const getProducts = useCallback(async () => {
    try {
      const response = await httpClient.get('/products')
      if (response.status === 200) {
        setProducts(response.data)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [])

  const placeOrder = useCallback(
    async (input) => {
      setIsPlacingOrder(true)
      const items = Array.from(input || []).map((item) => ({ productId: item.productId, quantity: item.quantity }))
      try {
        const response = await httpClient.post('/orders', { items })
        setIsPlacingOrder(false)
        if (response.status === 201) {
          alert(`Orden no. ${response.data.orderNumber} creada!`)
          navigate('/app/orders')
          dispatch(cartActions.clearCart())
        }
      } catch (error) {
        setIsPlacingOrder(false)
        console.error('httpClient error:', error)
        setErrorState({
          failed: true,
          message: error.message
        })
      }
    },
    [navigate]
  )

  useEffect(() => {
    if (productsRef.current) return
    productsRef.current = true
    setIsLoading(true)
    getProducts()
  }, [getProducts])

  useEffect(() => {
    if (isLoading && (products || errorState.failed)) setIsLoading(false)
  }, [products, errorState, isLoading])

  const componentProps = { ...props, products, placeOrder, isPlacingOrder }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withProducts
