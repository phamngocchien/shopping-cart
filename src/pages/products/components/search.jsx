import React from 'react';
import { useDispatch } from 'react-redux';
//import debounce from 'lodash.debounce';

import "../../../styles/styles.scss"
import { getKeySearch } from '../../../redux/products/action';

const Search = () => {
    const dispatch = useDispatch()
    const handleOnChange = (e) => {
        setTimeout(() => {
            const keySearch = e.target.value
            dispatch(getKeySearch(keySearch))                  
        }, 1000)
    }

    return (
        <div className="md:w-7/12 xl:w-4/12 w-full-mobile">
            <div className="bg-white flex items-center rounded-full shadow-xl mx-5">
                <input onChange={handleOnChange} className=" h-16  rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search..." />
            </div>
        </div>
    );
};

export default Search;