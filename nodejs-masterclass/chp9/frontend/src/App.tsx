import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import CartPage from './components/CartPage';
import Form from './components/Form';

export default function App() {
  const [products, setProducts] = useState<any>([])

  const getAllProducts = async () => {
    const data = await axios.get('/products');
    setProducts(data.data);

  }
  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartPage products={products} />}>
        </Route>
        <Route path="/form" element={<Form />}>
        </Route>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}