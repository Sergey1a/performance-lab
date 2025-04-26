import React from "react";
import {SortPropertyEnum} from "../../redux/filterSlice/types"
import {setSort} from "../../redux/filterSlice/filter"
import {useDispatch, useSelector} from "react-redux";
import {selectFilter} from "../../redux/filterSlice/selectors";

type SortOption = {
    name: string;
    sortProperty: SortPropertyEnum
}

const sortOptions:SortOption[] = [
    { name: "названию (DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
    { name: "названию (ASC)", sortProperty:SortPropertyEnum.TITLE_ASC },
    { name: "цена (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
    { name: "цена (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC},
];

const Sort = () => {
    const dispatch = useDispatch();
    const {sort} = useSelector(selectFilter);

    const onSelectSort = (e:React.ChangeEvent<HTMLSelectElement>) => {
      const res=  sortOptions.find(option=>option.sortProperty === e.target.value)
        if(res) {
            dispatch(setSort(res))
        }
    }

    return(
        <div>
            <label>Сортировка по: </label>
            <select
                value={sort.sortProperty}
                onChange={onSelectSort}
            >
                {sortOptions.map((option:SortOption, i:number) => (
                    <option
                        key={i}
                        value={option.sortProperty}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Sort;