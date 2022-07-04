import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';
import {PATH_MANAGER_ADMIN, PATH_MANAGER_ORDERS, PATH_MANAGER_PRODUCTS, PATH_ADMIN, PATH_MANAGER_PRODUCTS_FOOD, PATH_MANAGER_PRODUCTS_DRINK} from '../../routers/router'
import ManagerOrders from './components/contents/manager-orders';
import ManagerAdmin from './components/contents/manager-admin';
import Food from './components/contents/products/food';
import Drink from './components/contents/products/drink';

const AdminPage = () => {
    return (  
            <div className="flex bg-gray-200">
                <Sidebar/>
                <Header/>
                <div className ="w-full mt-20 ml-64 p-12 bg-gray-200 min-h-screen">
                    <div className="w-full">
                        <Switch>
                            <Route exact path={PATH_ADMIN} component={ManagerOrders} />
                            <Route exact path={PATH_MANAGER_ORDERS} component={ManagerOrders} />
                            <Route exact path={PATH_MANAGER_PRODUCTS} component={Food} />
                            <Route exact path={PATH_MANAGER_ADMIN} component={ManagerAdmin} />
                            <Route exact path={PATH_MANAGER_PRODUCTS_FOOD} component={Food} />
                            <Route exact path={PATH_MANAGER_PRODUCTS_DRINK} component={Drink} />

                        </Switch>     
                    </div>
                </div>
            </div>  
    );
};



export default AdminPage;