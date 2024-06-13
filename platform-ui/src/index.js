import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import setupStore from './redux/store'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'
import globalStyles from 'src/config/globalStyles'
import theme from 'src/config/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const muiTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#ffffff',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
})

const store = setupStore()

const GlobalStyle = createGlobalStyle`${globalStyles}`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </StyledThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
