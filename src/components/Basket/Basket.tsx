import styles from './Basket.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectBasket} from "../../redux/basketSlice/selector";
import {clearBasket} from "../../redux/basketSlice/basket";
import BasketItem from "./BasketItem";
import {FC} from "react";

type BasketState = {
    onClose:() => void
}

const Basket:FC<BasketState> = ({onClose}) => {
    const dispatch = useDispatch();
    const {items,totalPrice} = useSelector(selectBasket)

    const clearBasketHandler = () => {
        dispatch(clearBasket())
    }

    return (
        <div className={styles.root}>
            <button onClick={onClose} className={styles["close-basket"]}>X</button>
            <h2>Корзина товаров</h2>
            <div className={styles.title}>
                <span>Наименование товара</span>
                <span>Количество</span>
            </div>
            <ul className={styles.list}>
                {items.map((item) => ( <BasketItem key={item.id} {...item} /> ))}
            </ul>
            <div className={styles.basket}>
                <p>Общая цена : {totalPrice}$</p>
                <button onClick={clearBasketHandler} className={styles["basket-clear"]}>Очистить корзину</button>
            </div>

        </div>
    )
}

export default Basket;