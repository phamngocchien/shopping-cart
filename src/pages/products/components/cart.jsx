import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../../../styles/styles.scss"
import {addProductOrderFirebase, changeStatusShowCart, deleteProduct, quantityOrder} from '../../../redux/products/action'

const Cart = () => {
    const userLogin = useSelector(state => state.userReducer.userLogin)
    const [dataLocal, setDataLocal] = useState([])
    const [showOrderHistory, setShowOrderHistory] = useState([])
    const [btnShowHistory, setBtnShowHistory] = useState(false)
    const [showFormDelete, setShowFormDelete] = useState(false)
    const [idDelete, setIdDelete] = useState("")
    const [detailts, setDetails] = useState({
        nameUser: "", 
        numberUser: "", 
        addressUser:""
    })
    const [isValid, setIsValid] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if(Object.keys(userLogin).length !== 0 && userLogin.constructor === Object){
            setDetails({nameUser: userLogin.name, 
                numberUser: userLogin.phonenumber, 
                addressUser:userLogin.address})
        }  
    }, [userLogin])

    useEffect(() => {
        const orderProducts = JSON.parse(localStorage.getItem("order"))
        if(orderProducts){
            const listOder = [];  
            orderProducts.forEach(element => {
                element.price = element.quantity * element.price
                listOder.push(element)
            });      
            setDataLocal(orderProducts)
        }
        return () => {
            orderProducts
        }
    }, [])
    const closeCart = () => {
        dispatch(changeStatusShowCart())
    }

    const clearHistory = () => {
        
        localStorage.setItem("ordered", JSON.stringify([]))
        ;(function(){
            const history = JSON.parse(localStorage.getItem("ordered"))
            if(history){
                const listOder = [];  
                history.forEach(element => {
                    listOder.push(element)
                });      
                setShowOrderHistory(listOder)
            }
        }())
    }

    const cancelDelete = (e) => {
        e.preventDefault()
        setShowFormDelete(!showFormDelete)
    } 
    const deleteItem = (id) => {
        setIdDelete(id);
        setShowFormDelete(!showFormDelete)
        // const filterItem = dataLocal.filter(item => item.id !== e.target.id)
        // localStorage.setItem("order", JSON.stringify(filterItem))
    }

    const deleteBtn = (e) => {
        e.preventDefault()
        setShowFormDelete(!showFormDelete)
        dispatch(deleteProduct(idDelete, dataLocal))
        dispatch(quantityOrder())
        ;(function(){
            const orderProducts = JSON.parse(localStorage.getItem("order"))
            if(orderProducts){
                const listOder = [];  
                orderProducts.forEach(element => {
                    element.price = element.quantity * element.price
                    listOder.push(element)
                });      
                setDataLocal(orderProducts)
            }
        }())
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleTotalPrice = () => {
        let price = 0
        dataLocal.forEach(value => {
            price+=value.price
        })
        return price
    }

    const submitHandle = (e) => {
        e.preventDefault()
    }

    const btnHistory = () => {
        if(localStorage.getItem("ordered") === null){
            localStorage.setItem("ordered", JSON.stringify([]))
        }
        const listOrdered = JSON.parse(localStorage.getItem("ordered"))
        setShowOrderHistory(listOrdered)
        setBtnShowHistory(!btnShowHistory)
    }

    const orderUser = async() => {
        const listOrdered = await(JSON.parse(localStorage.getItem("ordered")))
        const orderedInfo = ([detailts,...dataLocal]) 
        dispatch(addProductOrderFirebase(orderedInfo));
        const orderHistory = ([...dataLocal, ...listOrdered])
        console.log(orderHistory);
        // setShowOrderHistory(orderHistory)
        (localStorage.setItem("ordered", JSON.stringify(orderHistory)))
        localStorage.setItem("order", JSON.stringify([]))
        toast.success("Your order is in processing, we'll contact you soon!", {
            position: "bottom-right",
        })
        setIsValid(false)
        setTimeout(() => {          
                const orderProducts = JSON.parse(localStorage.getItem("order"))
                if(orderProducts){
                    const listOder = [];  
                    orderProducts.forEach(element => {
                        element.price = element.quantity * element.price
                        listOder.push(element)
                    });      
                    setDataLocal(orderProducts)
                }
                          
        }, 4000);
        dispatch(quantityOrder())
    }

    const btnOrder = () => {
        // if(userLogin){
        //     orderUser()
        // }else{
            if(detailts.nameUser === "" || detailts.numberUser === "" || detailts.addressUser === ""){
                setIsValid(true)
            }else{    
                orderUser()

            }
        //}
        // }
        // else{
        //     orderUser()
        // }       
    }

    return (
        <aside className="top-0 right-0 w-full md:w-2/5 shadow-2xl bg-white fixed h-full z-30 mt-24 overflow-y-scroll" id="cart-panel">  
                     
            <div className="p-5 mb-32">
                <div className="flex justify-between align-center mb-6">
                    <button onClick={closeCart} className="bg-gray-200 py-2 px-6 rounded-full mt-6" id="close-cart-panel"><i className="fas fa-times" /></button>
                    <div>
                        <button onClick={btnHistory} className="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6 hover:text-white text-xl transition mr-2">Order history</button>
                    </div>
                </div>
                <main className="text-center font-bold">
                <i className="fas fa-shopping-basket fa-3x mx-auto mt-10" />
                {dataLocal.length > 0 ?(
                    <>
                    <table className=" mx-auto mt-6">
                        <thead>
                        <tr>
                            <th className="px-1">Name</th>
                            <th className="px-1">Quatity</th>
                            <th className="px-1">Price </th>
                            <th className="px-1">Note</th>
                            <th className="px-1"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {dataLocal.map((value, index) => {   
                            return(
                               
                                    <tr key={index}>
                                        <td className="text-left border border-gray-400 px-1 w-3/12 break-all">{value.name}</td>
                                        <td className="border border-gray-400 px-1 break-all w-2/12">{value.quantity}</td>
                                        <td className="text-left border border-gray-400 px-1 break-all w-3/12">{numberWithCommas(value.price)} VNĐ</td>
                                        <td className="text-left border border-gray-400 px-1 break-all w-4/12">{value.notes}</td>  
                                        <td className="text-left border border-gray-400 px-1  w-4/12">
                                            <button  onClick={()=>deleteItem(value.id)} className="rounded-lg bg-custom-yellow px-3 py-3 hover:text-white transition fas fa-trash-alt"></button>
                                        </td>   
                                    </tr>
                                )
                        })}
                        </tbody>
                    </table>
                    <div className=" w-fill my-4 border-input"/>
                    <form onSubmit={submitHandle} className="w-7/12 mx-auto">
                        <p className="text-xl">Consignee information </p>
                        <div className="bg-white pt-4">
                            <div className="mb-4 flex">
                                <input onChange={(e)=>setDetails({...detailts, nameUser:e.target.value})} className="border-input rounded w-full py-2 px-3 text-gray-700 focus:outline-none " placeholder="name" defaultValue={userLogin.name}/>
                            </div>
                            <div className="mb-4">
                                <input onChange={(e)=>setDetails({...detailts, numberUser:e.target.value})} className="border-input rounded w-full py-2 px-3 text-gray-700 focus:outline-none " placeholder="phone number" defaultValue={userLogin.phonenumber}/>
                            </div>
                            <div className="mb-4">
                                <input onChange={(e)=>setDetails({...detailts, addressUser:e.target.value})} className="border-input rounded w-full py-2 px-3 text-gray-700 focus:outline-none " placeholder="address" defaultValue={userLogin.address}/>
                            </div>
                        </div>
                        <div className="mt-10 text-lg">Total: <span className="text-custom-yellow">{numberWithCommas(handleTotalPrice())} VNĐ</span></div>
                        <button onClick={btnOrder} className="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6 hover:text-white text-xl transition">ORDER</button>
                        <ToastContainer/>
                    </form>

                    </>
                ):(<div className="my-6 font-bold text-xl">No products</div>)}
                {isValid && (<div className="text-md text-red-400 my-3 italic">Please fill in all fields</div>)}
                
                </main>
                {btnShowHistory && (
                <div className="mt-10 ">
                    <p className="text-xl font-bold text-center">Order history</p>
                    <table className=" mx-auto mt-4 w-full">
                        <thead>
                        <tr>
                            <th className="px-1">Name</th>
                            <th className="px-1">Quatity</th>
                            <th className="px-1">Price </th>
                            <th className="px-1">Note</th>
                        </tr>
                        </thead>
                        <tbody>                     
                            {showOrderHistory.map((value, key) => {   
                                return(                                    
                                    <tr key={key}>
                                        <td className="text-left border border-gray-400 px-1 w-3/12 break-all">{value.name}</td>
                                        <td className="border border-gray-400 px-1 break-all w-2/12">{value.quantity}</td>
                                        <td className="text-left border border-gray-400 px-1 break-all w-3/12">{numberWithCommas(value.price * value.quantity)} VNĐ</td>
                                        <td className="text-left border border-gray-400 px-1 break-all w-4/12">{value.notes}</td>    
                                    </tr>
                                )
                            })}
                        
                        </tbody>
                    </table>
                    <button onClick={clearHistory} className="rounded-lg bg-custom-yellow px-4 py-2 font-bold mt-6 hover:text-white text-xl transition">Clear History</button>
                </div>
                )}
            </div>
            {showFormDelete && (
                <form className="bg-yellow-100 absolute top-1/3 left-1/2 transform -translate-x-2/4 -translate-y-2/4 bg-white shadow-sm rounded-2xl px-8 pt-6 pb-8 mb-4 w-2/4 z-10">
                    <h1 className="text-center text-2xl font-bold mb-8">Do you want to delete this product?</h1>
                    <div className="flex justify-center">
                        <button onClick={deleteBtn} className="flex justify-center bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 w-32 rounded-full mt-6 transition-all mr-4">
                            Delete
                        </button>
                        <button onClick={cancelDelete} className="flex justify-center bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 w-32 rounded-full mt-6 transition-all">
                            Cancel
                        </button>
                    </div>
                </form>
            )}          
        </aside>

    );
};

export default Cart;