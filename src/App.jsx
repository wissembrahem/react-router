import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Aboutus from './assets/pages/Aboutus'
import DefaultLayout from './layout/DefaultLayout'
import Products from './assets/pages/Products'
import ProductPage from './assets/pages/ProductPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/Aboutus" element={<Aboutus />}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        </Route>
      </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
