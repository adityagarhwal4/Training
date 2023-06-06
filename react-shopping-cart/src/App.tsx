import axios from 'axios'
import { useEffect, useState } from 'react'
import Item from './components/Item'
import Cart from './components/Cart'
import { useSelector } from "react-redux";

type Props = {}

const App = (props: Props) => {
  const [apiData, setApiData] = useState<Array<{
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    price: number
}>>([]);

const [cartOpen, setCartOpen] = useState(false);


  const fetchingApi = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products')
    setApiData(data);
  }
  useEffect(() => {
    fetchingApi();
  }, [])

  const handleCartOpen = (value: boolean) => {
    setCartOpen(value);
  }

  const list = useSelector((state: any) => {
    return state.reducer.cartData;
  });


  return (
    <div>
      <Item items = {apiData} cartOpen={cartOpen} handleCartOpen={handleCartOpen} />
      {cartOpen === true && list.length > 0? <Cart /> : ""}
    </div>
  )
}

export default App;