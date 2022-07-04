import React from 'react';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { userLogout } from '../../../redux/login/action';
import { PATH_HOME } from '../../../routers/router';

const Header = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [isShowLog, setIsShowLog] = useState(false)

    const handleClickShowLog = () => {
        setIsShowLog(!isShowLog)
    }

    const logOut = () => {
        localStorage.removeItem("accessTokenAdmin")
        history.replace(PATH_HOME)
        dispatch(userLogout)
    }
    return (
        <>
            <header className=" fixed w-full items-center hidden sm:flex p-3 bg-gray-300 z-10">
                <div className="w-1/2" />
                    <div className="relative w-1/2 flex justify-end">
                        <button onClick={handleClickShowLog} className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-500 focus:border-gray-300 focus:outline-none">
                            <img src="https://i.pinimg.com/564x/08/11/a3/0811a35a1fff5513ee97b3db2e405d18.jpg" />
                        </button>
                        {isShowLog && 
                        (<div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                                <Link to={PATH_HOME} className="block px-4 py-2 hover:text-blue-500">Home</Link>
                                <a href="#" className="block px-4 py-2 hover:text-blue-500">Account</a>
                                <a href="#" className="block px-4 py-2 hover:text-blue-500">Support</a>
                                <a onClick={logOut} href="#" className="block px-4 py-2 hover:text-blue-500">Sign Out</a>
                        </div>)}                    
                    </div>
            </header>
        </>

        
    );
};



export default Header;