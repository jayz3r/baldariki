import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import Product from './components/Product'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<MainPage/>} />
       <Route path="/:category/:slug" element={<Product />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
