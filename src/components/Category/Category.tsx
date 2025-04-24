import {FC} from "react";
import styles from './Category.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectFilter} from "../../redux/filterSlice/selectors";
import {setCategory} from "../../redux/filterSlice/filter";

const categoriesArr = [
    { label: 'Еда', value: 'food' },
    { label: 'Одежда', value: 'clothes' },
    { label: 'Электроника', value: 'electronics' },
];

const Category: FC = () => {
    const dispatch = useDispatch();
    const {category} = useSelector(selectFilter)

    const onClickHandler = (value: string) => {
        dispatch(setCategory(value))
    }

    return (
        <div className={styles.category}>
            <ul className={styles.list}>
                {categoriesArr.map((item, i) => (
                    <li key={i}>
                        <button
                            onClick={() => onClickHandler(item.value)}
                            className={`${styles.button} ${category === item.value ? styles.active : ''}`}
                            type="button"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Category;