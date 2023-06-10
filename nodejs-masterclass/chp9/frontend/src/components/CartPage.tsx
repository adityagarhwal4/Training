

type Props = {
    products: [{
        thumbnail: string,
        title: string,
        price: number,
        rating: number,
        stock: number,
        _id: string
    }]
}

const CartPage = ({ products }: Props) => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {products.map((product) => {
                return <div key={product._id} className="flex flex-col mt-2 border-2 rounded-md">
                    <img className="h-60 w-full" src={product.thumbnail} alt="" />
                    <div className="flex justify-around">
                        <div className="">
                            <p className="my-1">{product.title}</p>
                            <p className="my-1">Price: ${product.price}</p>
                        </div>
                        <div className="">
                            <p className="my-1">Rating: {product.rating}</p>
                            <p className="my-1">Stock Avilable: {product.stock}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CartPage