import { useState } from 'react';
import axios from 'axios';

const Form = () => {

    const [product, setProduct] = useState({});
    const addProduct = async (product: {}) => {
        const data = await axios.post('/products', product);
        console.log(data);
    }

    const handleChange = (e: any) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(product);
        addProduct(product);
    }

    return (
        <div>
            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                <div className='my-4'>
                    <label htmlFor="title">Title:</label>
                    <input className='border-2' type="text" name="title" onChange={handleChange} />
                </div>
                <div className='my-4'>
                    <label htmlFor="price">Price:</label>
                    <input className='border-2' type="text" name="price" onChange={handleChange} />
                </div>
                <div className='my-4'>
                    <label htmlFor="brand">Brand:</label>
                    <input className='border-2' type="text" name="brand" onChange={handleChange} />
                </div>
                <div className='my-4'>
                    <label htmlFor="discount">Discount:</label>
                    <input className='border-2' type="text" name="discount" onChange={handleChange} />
                </div>
                <div className='my-4'>
                    <input className='border-2' type="submit" name="title" />
                </div>
            </form>
        </div>
    )
}

export default Form;