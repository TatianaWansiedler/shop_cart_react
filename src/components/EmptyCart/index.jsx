import React from 'react';
import s from './style.module.css'

const EmptyCart = () => {
    return (
        <div className={s.empty_cart}>
            <img className={s.img} src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" alt="cart_is_empty" />
            <p className={s.text}>Your shopping cart is empty!</p>
        </div>
    );
};

export default EmptyCart;