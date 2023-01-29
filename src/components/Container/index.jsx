import React, { useState } from 'react';
import EmptyCart from '../EmptyCart';
import ProductCard from '../ProductCard';
import TotalAmount from '../TotalAmount';
import s from './style.module.css'

const Container = () => {
    const data = [
        {
            id: 1,
            title: 'Poke Bowl',
            image: 'https://cdn.arora.pro/g/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/c6c5553b-ba0a-49ff-9829-adda0182b5ed.jpg', 
            price: 17, 
            count: 1
        },
        {
            id: 2,
            title: 'Tom Yum Soup',
            image: 'https://cdn.arora.pro/g/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/cad18bcf-cdb3-427e-8958-ae1b0156c30f.jpg', 
            price: 12, 
            count: 1
        },

        {
            id: 3,
            title: 'Philadelphia Roll',
            image: "https://cdn.arora.pro/g/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/358e8d6f-3907-47b4-bf31-ae1f017c0e88.jpg",
            price: 10, 
            count: 1
        },
        {
            id: 4,
            title: 'Tiramisu',
            image: 'https://cdn.arora.pro/g/upload/57605119-91bb-4c26-aded-c31b450f1c37/size-1/75c3b439-d1f3-4659-86b5-af4200769629.jpg', 
            price: 13, 
            count: 1
        }
    ]
    const [products, setProducts] = useState(data)

    const deleteProd = (delId) => {
        const newArr = products.filter(({id})=> id !== delId)
        setProducts(newArr)
    }
    const changeCount = (id, value) => {
        const item = products.find((el)=> el.id === id)
        item.count += value
        setProducts([...products])
    }

    const getTotalAmount = () => products.reduce((prev, el)=> prev + el.count, 0)
    const getTotalPrice = () =>  products.reduce((prev, el)=> prev + el.price * el.count, 0)
    

    return (
        <div className={s.container}>
            <div>
                {
                    getTotalAmount() !== 0 ? 
                    products.map((el) => 
                        <ProductCard 
                            key={el.id}
                            deleteProd={deleteProd}
                            changeCount={changeCount}
                            {...el}
                        />)
                    :  <EmptyCart/>
                }
            </div>
            <TotalAmount 
                getTotalAmount={getTotalAmount} 
                getTotalPrice={getTotalPrice}
            />

        </div>
    );
};

export default Container;