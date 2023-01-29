import React from 'react';
import s from './style.module.css'


const ProductCard = ({id,image,title,price,count,deleteProd,changeCount}) => {
    return (
        <div className={s.card}>
            <img className={s.img} src={image} alt="product_Image" />
            <h3 className={s.title}>{title}</h3>
            <div className={s.change_btn}>
                <button className={s.btn} onClick={()=> count <= 1 ? deleteProd(id): changeCount(id,-1)}>-</button>
                <span>{count}</span>
                <button className={s.btn} onClick={()=>changeCount(id,1)}>+</button>
            </div>
            <p className={s.price}>{price} $</p>
            <button className={s.del_btn} onClick={()=>deleteProd(id)}>
                <i class="las la-trash-alt"></i>
            </button>
        </div>
    );
};

export default ProductCard;