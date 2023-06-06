import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../action/Action";

type Props = {
    items: Array<{
        id: number,
        title: string,
        description: string,
        category: string,
        image: string,
        price: number
    }>,
    cartOpen: boolean,
    handleCartOpen: (value: boolean) => void
}

const Item = ({ items, cartOpen, handleCartOpen }: Props) => {

    const dispatch = useDispatch();
    const list = useSelector((state: any) => {
        return state.reducer.cartData;
      });
      
    return (
        <div className='w-full grid grid-cols-4 relative pt-10'>
            <div className='fixed right-10 top-5 z-30' onClick={() => handleCartOpen(!cartOpen)}>
                <img className='h-8 w-8' src="https://img.uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.png" alt="" />
                <span className='absolute -right-1 -top-3 font-bold'>{list.length}</span>
            </div>
            {items.map((item) => {
                return <div key={item.id} className='border-2 w-72 my-3 flex flex-col items-center text-center'>
                    <img className='h-72 w-72' src={item.image} alt="" />
                    <div>
                        <h3 className='text-xl'>{item.title ? item.title.slice(0, 25) + "..." : ""}</h3>
                        <p className='text-sm'>{item.description ? item.description.slice(0, 100) + "..." : ""}</p>
                        <h3 className='font-bold my-2'>${item.price}</h3>
                    </div>
                    <button className='bg-blue-500 text-white rounded-md px-4 py-2 mb-2' onClick={() => dispatch(addCart(item))}>Add to Cart</button>
                </div>
            })}
        </div>
    )
}

export default Item