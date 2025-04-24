import {FC} from "react";
import styles from './BasketItem.module.css'
import {useDispatch} from "react-redux";
import {addItems, deleteItem, itemMinus} from "../../redux/basketSlice/basket";


type BasketProps = {
    id: number;
    name: string;
    image: string;
    price: number;
    count: number;
}

const BasketItem:FC<BasketProps> = ({id,name,image,price,count}) => {
    const dispatch = useDispatch()

    const addItemHandler = () => {
        dispatch(addItems({id, name, image, price, count}))
    }

    const minusItemHandler = () => {
        dispatch(itemMinus({id,price}))
    }

    const deleteItemHandler = () => {
        dispatch(deleteItem({id,price,count}))
    }

    return (
        <li className={styles.root}>
            <div className={styles.title}>{name}</div>

            <div className={styles.count}>
                <button className={styles["button-minus"]} onClick={ minusItemHandler}>-</button>
                <span>  {count}  </span>
                <button className={styles["button-plus"]} onClick={addItemHandler}>+</button>
            </div>

            <div className={styles.price}>
                <span>{count * price}</span>
            </div>

            <button className={styles["delete-item"]} onClick={deleteItemHandler}>X</button>
        </li>
    )
}

export default BasketItem;