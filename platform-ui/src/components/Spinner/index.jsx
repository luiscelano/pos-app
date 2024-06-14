import React from 'react'
import * as styles from './styles'
import { BeatLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

const Spinner = () => {
  const theme = useTheme()
  return (
    <>
      <styles.SpinnerContainer>
        <BeatLoader color={'#f9a825'} />
      </styles.SpinnerContainer>
    </>
  )
}

export default Spinner
