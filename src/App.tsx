
import React from 'react'

import { RouterProvider } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme/public.theme'
import Routes from './routes/PublicRoutes'



function App() {

  return (
    <React.Fragment>

      <ThemeProvider theme={theme}>
         <CssBaseline/>  {/*//to convert mui to normal css */}
      
      <RouterProvider router={Routes}/>

      </ThemeProvider>

    </React.Fragment>

  )
}

export default App

