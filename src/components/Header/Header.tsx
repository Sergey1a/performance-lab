import basket from '../../assets/img/basket.svg'
import React from "react";
import styles from "./Header.module.css";
import Basket from "../Basket/Basket";

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={styles.header}>
            <h1 className={styles["header-title"]}>HEADER</h1>
            <button onClick={toggleOpen} className={styles["header-basket"]}>
                <img src={basket} alt='basket'/>
            </button>
            {open && <Basket onClose={toggleOpen} />}
        </div>
    )
}

export default Header;