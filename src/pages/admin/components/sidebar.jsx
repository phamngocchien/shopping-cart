import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_MANAGER_ADMIN, PATH_MANAGER_ORDERS, PATH_MANAGER_PRODUCTS, PATH_MANAGER_PRODUCTS_DRINK, PATH_MANAGER_PRODUCTS_FOOD} from '../../../routers/router'


const Sidebar = () => {
    return (
        <aside className="fixed z-10 bg-blue-500 h-screen w-64 z-20">
            <div className="bg-blue-600" style={{padding:"1.14rem"}}>
                <a className="text-white text-3xl uppercase hover:text-gray-300">Admin</a>
            </div>
            <div className="text-white text-base pt-3 ">
                <div className="cursor-pointer hover:bg-blue-600 transition-all mb-2">
                    <Link to={PATH_MANAGER_ORDERS} className="flex items-center text-white py-4 pl-6">
                        <i className="fas fa-shopping-cart mr-3" />
                        Order Management
                    </Link>
                </div>
                <div className="cursor-pointer transition-all mb-2">
                    <Link to={PATH_MANAGER_PRODUCTS} className="flex items-center hover:bg-blue-600 text-white py-4 pl-6 ">
                        <i className="fas fa-tasks mr-3" />
                        Product Management
                    </Link>
                    <div className="ml-10">
                        <Link to={PATH_MANAGER_PRODUCTS_FOOD} className="rounded-l-xl flex items-center transition-all hover:bg-blue-600 text-white py-4 pl-6 ">
                        <i className="fas fa-hamburger mr-3"></i>
                            Food
                        </Link>
                    
                        <Link to={PATH_MANAGER_PRODUCTS_DRINK} className="rounded-l-xl flex items-center transition-all hover:bg-blue-600 text-white py-4 pl-6 ">
                        <i className="fas fa-coffee mr-3"></i>
                        Drink
                        </Link>
                    </div>
                 
                </div>
                <div className="cursor-pointer hover:bg-blue-600 transition-all mb-2">
                    <Link to={PATH_MANAGER_ADMIN} className="flex items-center text-white py-4 pl-6 ">
                        <i className="fas fa-users mr-3" />
                        Admin Management
                    </Link>
                </div>                
            </div>
            <a href="#" className="absolute w-full bottom-0 text-white flex items-center justify-center py-4 bg-blue-600">
                <i className="fas fa-arrow-circle-up mr-3" />
                ChienPN
            </a>
        </aside>

    );
};


export default Sidebar;