import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import { BasketProvider } from './context/BasketProvider'
import Home from './pages/home'
import AdminLayout from './Layout/AdminLayout'
import AdminTable from './pages/AdminTable'
import Detail from './pages/detail'

function App() {

  return (
    <>
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/:id' element={<Detail></Detail>} ></Route>
              <Route path='*' element={<h1>404</h1>} ></Route>
            </Route>
          </Routes>
          <Routes>
            <Route path="/adminpage" element={<AdminLayout />}>
              <Route index element={<AdminTable />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BasketProvider>
    </>
  )
}

export default App
