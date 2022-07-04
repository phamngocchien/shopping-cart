import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../../../styles/styles.scss'
// import burger from '../../assets/img/burger.png'
import {changeStatusShowInfoProduct, quantityOrder} from '../../../../redux/products/action/index'
import {getDrinks} from '../../../../services/api';
import { addProduct } from '../../../../redux/products/action/index';

const DrinkInfo = () => {
    const [valueInputNote, setValueInputNote] = useState("")
    const [valueInputQuatity, setValueInputQuatity] = useState("")
    const [isValid, setIsValid] = useState(false)

    const getDrink = getDrinks();
    const getIdProduct = useSelector(state => state.allProducts.idDrink)
    const drink = getDrink.find((item) => item.id === getIdProduct)  
    const dispatch = useDispatch()
    const oderProduct = () => {
        dispatch(changeStatusShowInfoProduct())
    }
    function handleGetProduct(){
        if(valueInputQuatity === ""){
            setIsValid(true)
        }else{
            dispatch(addProduct(drink, valueInputNote, valueInputQuatity))
            dispatch(quantityOrder())
            dispatch(changeStatusShowInfoProduct())                     
        }        
    }
    const handleInputQuantity = (e) => {
        setValueInputQuatity(e.target.value);
    }
    const handleInputNote = (e) => {
        setValueInputNote(e.target.value)
    }  
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }     
    return (
        <aside className="w-full md:w-3/5 xl:w-2/5 shadow-2xl rounded-lg bg-white z-10 absolute left-1/2 -translate-x-2/4 transform" id="side-panel">
            <div className="p-5">
                <button onClick={oderProduct} className="float-left bg-gray-200 py-2 px-6 rounded-full" id="close-side-panel"><i className="fas fa-times" /></button>
                <main className="text-center mb-10">
                    <img src={drink.image} alt="burger" className=" max-h-72 rounded-3xl w-56 mx-auto mt-10 mb-6" />
                    <span className="font-bold text-2xl mb-2">{drink.name}</span>
                    <span className="block text-gray-600 text-md">{drink.description}</span>
                    <span className="block text-custom-yellow mt-5 font-bold text-2xl"> <i className="fas fa-tags"></i> {numberWithCommas(drink.price)} VNĐ</span>
                    <span className="block mt-5"> Quantity:
                        <input id="quantity" onChange={handleInputQuantity} type="number" min="1" className="rounded-lg bg-gray-200 p-2 ml-2 w-24" placeholder="Quantity"/>
                    </span>
                    {isValid && (<p className="text-red-400 my-2">Please enter quantity</p>)}
                    <span className="block my-4">
                        <input id="input" onChange={handleInputNote} type="text" className="rounded-lg bg-gray-200 p-2 w-6/12" placeholder="Add notes.." />
                    </span>
                    <button onClick={handleGetProduct} className="rounded-lg bg-custom-yellow px-4 py-2 font-bold hover:text-white text-xl transition">Add to cart</button>
                </main>
            </div>
            <ToastContainer/>
        </aside>

    );
};


export default DrinkInfo;