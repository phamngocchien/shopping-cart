import React from 'react';
//import { useSelector } from 'react-redux';

const Pagination = (totalDrink) => {
    const pageNumber = []
    for(let i = 1; i <= Math.ceil(totalDrink.totalDrink / totalDrink.postsPerPage); i++){
        pageNumber.push(i)   
    }

    return (
        <nav className="float-right mt-5">
            <ul className="flex">
                {pageNumber.map((number, key) => {
                    return(
                        <li key={key} className=" mx-1 ">
                            <a onClick={()=>{totalDrink.paginate(number)}} className="px-3 py-2 bg-blue-400 rounded-md text-white hover:bg-blue-500 transition-all">{number}</a>
                        </li>
                    )
                })}
            </ul>               
        </nav>
    );
};

export default Pagination;