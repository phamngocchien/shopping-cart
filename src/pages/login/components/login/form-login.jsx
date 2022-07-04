import React from 'react';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'

import "../../../../styles/styles.scss"
import { getAdmin } from '../../../../services/api';
import { PATH_HOME, PATH_SIGNUP } from '../../../../routers/router';
import { Link } from 'react-router-dom';
import { userLogin } from '../../../../redux/login/action';

const FormLogin = () => {
    let history = useHistory()
    const [user, setUser] = useState()
    const [isValid, setIsValid] = useState(false)
    const [detailts, setDetails] = useState({username: "", password: ""})
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const submitHandle = (e) => {
        e.preventDefault()
        setIsValid(false)

    }

    useEffect(() => {
        getAdmin.on("value", snapshot => {
            const list = []
            snapshot.forEach(value => {
                list.push(value.val())
            })
            setUser(list)
        })
        return () => {
            getAdmin
        }        
    }, [])

    const login = (e) => {
        e.preventDefault()
        user.forEach(value => {
            if(detailts.username === value.username && detailts.password === value.password && value.role === "user"){
                localStorage.setItem("accessTokenUser", true)
                setLoading(true)
                setTimeout(() => {
                     history.replace(PATH_HOME)                  
                }, 1500);
                dispatch(userLogin(value))
                setIsValid(false) 
            }
            else if(detailts.username === value.username && detailts.password === value.password && value.role === "admin"){
                localStorage.setItem("accessTokenAdmin", true)
                setLoading(true)
                setTimeout(() => {
                     history.replace(PATH_HOME)                  
                }, 1500);
                dispatch(userLogin(value))
                setIsValid(false) 
            }
            else{
                setLoading(true)
                setTimeout(() => {
                    setIsValid(true)                 
               }, 1500);
                
            }
        })
    }
    return (
        <div className="body bg-custom-yellow min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <header className="max-w-lg mx-auto">
                <a href="#">
                <h1 className="text-4xl font-bold text-white text-center">Food & Drink</h1>
                </a>
            </header>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section className="text-center">
                <h3 className="font-bold text-2xl">Welcome</h3>
                <p className="text-gray-600 pt-2">Sign in to your account.</p>
                </section>
                <section className="mt-10">
                <form onSubmit={submitHandle} className="flex flex-col">
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="name">Username</label>
                        <input onChange={(e) => setDetails({...detailts, username: e.target.value})} value={detailts.username} type="text" id="name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required/>
                    </div>
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                        <input onChange={(e) => setDetails({...detailts, password: e.target.value})} value={detailts.password} type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" required/>
                    </div>
                    <button onClick={login} className="relative bg-custom-yellow hover:bg-yellow-500 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In
                        {loading && (
                            <div className='flex absolute right-0 mr-3 top-1/2'>
                                <div className="mr-1 h-2 w-2 bg-current rounded-full bounce"></div>
                                <div className="mr-1 h-2 w-2 bg-current rounded-full bounce200"></div>
                                <div className="h-2 w-2 bg-current rounded-full bounce400"></div>
                            </div>
                        )}
                    </button>
                    {isValid && (<div className="text-md font-bold mt-2 text-red-500">Invalid account or password </div>)}
                    <div className="flex justify-between mt-8">
                        <Link to={PATH_HOME} className="hover:text-yellow-500">
                            <i className=" fas fa-arrow-left"></i>
                            <span className="ml-2">Home</span>
                        </Link>
                        <Link to={PATH_SIGNUP} className="hover:text-yellow-500">
                            <span className="mr-2">Sign up</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </form>
                </section>
            </main>
        </div>

    );
};



export default FormLogin;