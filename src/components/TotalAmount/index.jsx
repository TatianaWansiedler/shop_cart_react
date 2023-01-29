import React from 'react';
import s from './style.module.css'

const TotalAmount = ({getTotalAmount, getTotalPrice}) => {
    const total_amt = getTotalAmount()
    const total_sum = getTotalPrice()
    return (
        <div className={s.total}>
            <h3 className={s.title}>Subtotal</h3>
            <div className={s.amount}>
                <span>Items:</span>
                <span>{total_amt}</span>
            </div>
            <div className={s.amount}>
                 <span>Order Total:</span>
                <span> $ {total_sum}</span>  
            </div>
            <button className={s.pay_btn}>ORDER AND PAY</button>
        </div>
    );
};

export default TotalAmount;