import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import { BasketProvider } from './context/BasketProvider'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BasketProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </BasketProvider>
    </>
  )
}

export default App
