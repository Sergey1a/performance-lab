import {FC} from "react";
import styles from "./Item.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addItems} from "../../redux/basketSlice/basket";
import {BasketItem} from "../../redux/basketSlice/types";
import {selectBasketById} from "../../redux/basketSlice/selector";

type ItemProps = {
    id: number;
    name: string;
    price: number;
    image: string;
}

const Item: FC<ItemProps> = ({id,name, price, image}) => {
    const dispatch = useDispatch();
    const countPrice = useSelector(selectBasketById(id))

    const countSelect = countPrice ? countPrice.count : 0

    const addBasketItem = () => {
        const item: BasketItem  = {
            id,
            name,
            price,
            image,
            count: 0
        }
        dispatch(addItems(item))
    }

    return (
        <div className={styles.root}>
            <div className={styles.img}>
                <img src={image} alt="sdad"/>
            </div>
            <h2>{name}</h2>
            <div className={styles.price}>
                <p>$ {price}</p>
                <button
                    className={styles.button}
                    onClick={addBasketItem}
                >Добавить {countSelect ? <span className={styles["button-count"]}>{countSelect}</span> : null}
                </button>
            </div>

        </div>
    )
}

export default Item