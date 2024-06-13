import { Suspense, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/index'

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<></>} >
        <AppRoutes/>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
