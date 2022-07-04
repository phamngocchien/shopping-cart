import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { PATH_HOME, PATH_LOGIN } from '../../../../routers/router';
import { Link } from 'react-router-dom';
import { userRegister } from '../../../../redux/login/action';

const FormSignup = () => {
    const [detailts, setDetails] = useState({
        username: "", 
        password: "", 
        name: "", 
        address: "", 
        phonenumber: "", 
        role: "user"
    })
    const [isValid, setIsValid] = useState(false)
    const dispatch = useDispatch()
    const submitHandle = (e) => {
        e.preventDefault()
    }

    const signup = () => {
        if(detailts.username == "" || detailts.password == "" || detailts.name == "" || detailts.address == "" || detailts.phonenumber == ""){
            setIsValid(true)
        }else{
            console.log(detailts);
            dispatch(userRegister(detailts))
            setIsValid(false)
            toast.success("Your order is in processing, we'll contact you soon!", {
                position: "bottom-right",
            })
        }
    }
    return (
        <div className="body bg-custom-yellow min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <header className="max-w-lg mx-auto">
                <a href="#">
                <h1 className="text-4xl font-bold text-white text-center">Food & Drink</h1>
                </a>
            </header>
            <main className="bg-white max-w-xl mx-auto p-4 md:p-10 my-10 rounded-lg shadow-2xl">
                <section className="text-center">
                <h3 className="font-bold text-2xl">Welcome</h3>
                <p className="text-gray-600 pt-2">Sign up to your account.</p>
                </section>
                <section className="mt-10">
                <form onSubmit={submitHandle} className="flex flex-col">
                    <div className="mb-4 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="name">Name</label>
                        <input onChange={(e) => setDetails({...detailts, name: e.target.value})} value={detailts.name} type="text" id="name" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" placeholder="Nguyễn Văn A"/>
                    </div>
                    <div className="mb-4 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="username">Username</label>
                        <input onChange={(e) => setDetails({...detailts, username: e.target.value})} value={detailts.username} type="text" id="username" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" placeholder="user"/>
                    </div>
                    <div className="mb-4 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                        <input onChange={(e) => setDetails({...detailts, password: e.target.value})} value={detailts.password} type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"placeholder="password"/>
                    </div>
                    <div className="mb-4 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="phonenumber">Phone Number</label>
                        <input onChange={(e) => setDetails({...detailts, phonenumber: e.target.value})} value={detailts.phonenumber} type="text" id="phonenumber" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" placeholder="0987654321"/>
                    </div>
                    <div className="mb-4 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Address</label>
                        <input onChange={(e) => setDetails({...detailts, address: e.target.value})} value={detailts.address} type="text" id="address" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" placeholder="số 36, 190 Nguyễn Trãi, Thanh Xuân, Hà Nội"/>
                    </div>
                    <button onClick={signup} className="bg-custom-yellow hover:bg-yellow-500 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign Up</button>
                    {isValid && (<div className="text-md font-bold mt-2 text-red-500">Please fill in all fields</div>)}
                    <div className="flex justify-between mt-6">
                        <Link to={PATH_HOME} className="hover:text-yellow-500">
                            <i className=" fas fa-arrow-left"></i>
                            <span className="ml-2">Home</span>
                        </Link>
                        <Link to={PATH_LOGIN} className="hover:text-yellow-500">
                            <span className="mr-2">Sign in</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </form>
                </section>
            </main>
            <ToastContainer/>
        </div>

    );
};



export default FormSignup;