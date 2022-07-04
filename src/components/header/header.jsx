import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import "../../styles/styles.scss"
import { PATH_NULL, PATH_HOME, PATH_FOOD, PATH_DRINK, PATH_LOGIN, PATH_ADMIN} from '../../routers/router'


const Header = () => {
    let history = useHistory()
    const userLogin = useSelector(state => state.userReducer.userLogin)
    const [isShowLog, setIsShowLog] = useState(false)

    const handleClickShowLog = () => {
        setIsShowLog(!isShowLog)
    }
    const logOut = () => {
        if(localStorage.getItem("accessTokenUser")){
            localStorage.removeItem("accessTokenUser")
            history.replace(PATH_LOGIN)
        }
        else if(localStorage.getItem("accessTokenAdmin")){
            localStorage.removeItem("accessTokenAdmin")
            history.replace(PATH_LOGIN)
        }
    }

    return (   
            <div className="fixed top-0 left-0 w-full z-50 sm:flex sm:items-center sm:justify-center bg-custom-yellow md:p-8 md:px-16 pb-mobile">
                <div className="font-bold uppercase mr-auto flex-mobile p-mobile">
                    <Link to={PATH_NULL} href="#" className="text-2xl hover:text-white transition-option md:flex md:item-center"><i className="fas fa-user-ninja mr-2 " />
                        Food&amp;Drink
                    </Link>
                </div>
                <a href="#" className="text-2xl hover:text-white transition-option text-mobile">
                </a>
                <div className="font-bold text-2xl flex-mobile md:flex md:justify-center">
                    <Link to={PATH_HOME} className="py-2 px-5 transition-option hover:text-white ">Home</Link>
                    <Link to={PATH_FOOD} className="py-2 px-5 transition-option hover:text-white ">Food</Link>
                    <Link to={PATH_DRINK} className="py-2 px-5 transition-option hover:text-white ">Drink</Link>
                    {localStorage.getItem("accessTokenAdmin") && (
                        <>
                            <Link to={PATH_ADMIN} className="py-2 px-5 transition-option hover:text-white ">Dashboard</Link>
                        </>                      
                    )}
                    {(localStorage.getItem("accessTokenUser") || localStorage.getItem("accessTokenAdmin")) ? (
                        <div className="relative w-1/2 flex justify-end ml-5">
                            <button onClick={handleClickShowLog} className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-500 focus:border-gray-300 focus:outline-none">
                                <img src="https://i.pinimg.com/564x/08/11/a3/0811a35a1fff5513ee97b3db2e405d18.jpg" />
                            </button>
                            {isShowLog && 
                            (<div className="absolute w-40 bg-white rounded-lg shadow-lg py-2 mt-16">
                                <h1 className="text-xl text-center py-1" style={{borderBottom:"solid 1px yellow"}}><i className="far fa-smile-wink"></i> Hi, {userLogin.name}</h1>
                                <a href="#" className="block px-4 py-2 hover:text-yellow-300 text-xl text-center mt-2">Account</a>
                                <a href="#" className="block px-4 py-2 hover:text-yellow-300 text-xl text-center">Support</a>
                                <Link to={PATH_LOGIN} onClick={logOut} href="#" className="block px-4 py-2 hover:text-yellow-300 transiton-all text-xl text-center">Sign Out</Link>
                            </div>)}                    
                        </div>
                    ) : (
                        <Link to={PATH_LOGIN} onClick={logOut} className="py-2 px-5 transition-option hover:text-white ">Sign In</Link>
                    )}
                    
                </div>
            </div>
    );
};

export default Header;