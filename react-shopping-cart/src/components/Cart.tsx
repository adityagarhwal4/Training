import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../action/Action";

type Props = {}

const Cart = (props: Props) => {
    const dispatch = useDispatch();
    const list = useSelector((state: any) => {
        return state.reducer.cartData;
    });

    // item id
    const itemsId = list.map((element: any) => {
        return element.id;
    });
    // items and quantity

    const itemsAndQty: any = {};
    itemsId.forEach((element: any) => {
        itemsAndQty[element] = (itemsAndQty[element] || 0) + 1;
    });

    let keys = Object.keys(itemsAndQty);

    // pushing the repeated items in an saperate
    // console.log(keys);

    let newArrr: any = [];
    Object.keys(itemsAndQty).forEach((element) => {
        for (let i = 0; i < list.length; i++) {
            if (parseInt(element) === list[i].id) {
                newArrr.push(list[i]);
                break;
            }
        }
    })

    let totalPrice: number = 0;
    list.forEach((element: {price: number}) => {
        totalPrice = totalPrice + element.price;
    });

    return (
        <div className="w-1/2 fixed top-0 right-0 bottom-0 bg-gray-300 pt-24">
            {keys.map((item: any, index: number) => {
                return <div className="flex justify-between ml-5 items-center text-center my-3" key={index}>
                    <div>
                        <img className="w-40 h-40" src={newArrr[index].image} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl">{newArrr[index].title ? newArrr[index].title.slice(0, 15) + "..." : ""}</h1>
                        <p className="font-bold">Price: ${newArrr[index].price}</p>
                        <p className="font-bold">Total: ${newArrr[index].price * itemsAndQty[item]}</p>
                    </div>
                    <div className="flex">
                        <button className="px-5 py-3 mx-3 rounded-sm bg-gray-700 text-white" onClick={() => dispatch(removeCart(newArrr[index]))}>-</button>
                        <p>{itemsAndQty[item]}</p>
                        <button className="px-5 py-3 mx-3 rounded-sm bg-gray-700 text-white" onClick={() => dispatch(addCart(newArrr[index]))}>+</button>
                    </div>

                </div>
            })}
            <h3 className="text-center font-bold text-2xl">Total Price: {totalPrice}</h3>
        </div>
    )
}

export default Cart