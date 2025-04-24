import Category from "../components/Category/Category";
import Sort from "../components/Sort/Sort";
import { useSelector} from "react-redux";
import {selectFilter} from "../redux/filterSlice/selectors";
import {fetchItems} from '../redux/itemSlice/items'
import React from "react";
import {useAppDispatch} from "../hooks/hokks";
import {selectItems} from "../redux/itemSlice/selector";
import {setCurrentPage} from '../redux/filterSlice/filter'
import Item from "../components/Item/Item";
import {Pagination} from "../components/Pagination/Pagination";


const Home = () => {
    const dispatch = useAppDispatch();
    const {category,sort,currentPage} = useSelector(selectFilter);
    const {items} = useSelector(selectItems);
    const sortBy = sort.sortProperty.replace("-", '');
    const sortOrder = sort.sortProperty.includes("-") ? "asc" : "desc";

    React.useEffect(() => {
        if(category) {
            dispatch(fetchItems({category, sortBy,sortOrder,currentPage}))
        }
    },[category,sort.sortProperty,currentPage])

    const onChangePage = (currentPage: number) => {
        dispatch(setCurrentPage(currentPage))
    }

    return (
        <div className="home">
            <div className="home-filter">
                <Category/>
                <Sort/>
            </div>
            <div className="home-content">
                {items.map(item => (<Item {...item} key={item.id} />))}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}

export default Home;