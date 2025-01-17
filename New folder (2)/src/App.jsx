import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import { BasketProvider } from './context/BasketProvider'
import Home from './pages/home'
import AdminLayout from './Layout/AdminLayout'
import AdminTable from './pages/AdminTable'

function App() {

  return (
    <>
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="adminpage" element={<AdminLayout />}>
              <Route index element={<AdminTable />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </BasketProvider>
    </>
  )
}

export default App
