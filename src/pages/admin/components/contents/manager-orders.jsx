import React from 'react';
import firebase from 'firebase';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getOrder } from '../../../../services/api';
import { deleteProductOrder } from '../../../../redux/admin/action';
import Pagination from './products/pagination';

const ManagerOrders = () => {
    const [isFormDelete, setIsFormDelete] = useState(false)
    const [idDelete, setIdDelete] = useState()
    const [isFormDetail, setIsFormDetail] = useState(false)
    const [listUser, setListUser] = useState([])
    const [infoUser, setInfoUser] = useState([])
    const [infoOrder, setInfoOrder] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)


    const dispatch = useDispatch()

    useEffect(() => {
        getOrder.on('value', (snapshot) => {
            const list = []
            snapshot.forEach((snap) => {
                let a = snap.val();
                const id = snap.key;
                const nameUser = a[0].nameUser;
                const numberUser = a[0].numberUser;
                const addressUser = a[0].addressUser;
                list.push({
                    id: id,
                    nameUser: nameUser,
                    numberUser: numberUser,
                    addressUser: addressUser 
                });
            })
            setListUser(list.reverse());
        })
        return () => {
            getOrder
        }
    }, [])

    const indexOfLastPost = postsPerPage * currentPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentUser = listUser.slice(indexOfFirstPost, indexOfLastPost)
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleShowFormDel = (id) => {
        setIsFormDelete(!isFormDelete)
        setIdDelete(id)      
    }

    const confirmDeleteOrder = () => {
        dispatch(deleteProductOrder(idDelete))
        setIsFormDelete(!isFormDelete)
        toast.success("Delete Success", {
            position: "bottom-right",
        })
    }
    const handleShowFormDetail = (id) => {
        setIsFormDetail(!isFormDetail)
        firebase.database().ref('products/' + "order").child(id).once('value', snapshot => {
            const order = snapshot.val();
            const getUser = order.shift()
            const list = []
            list.push(getUser)
            setInfoUser(list)
            setInfoOrder(order);
        });
    }
    const cancelFormDetail = () => {
        setIsFormDetail(!isFormDetail)      
    }

    const totalPrice = () => {
        let price = 0
        infoOrder.forEach(value => {
            price+=value.price
        })
        return price
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="relative">
            <h1 className="text-center text-2xl font-bold ">ORDER MANAGEMENT</h1>
            <div className="w-full mt-10 mb-4 flex">               
                <div className="bg-white h-full w-full" style={{minHeight: "614px"}}>
                    <table className="min-w-full bg-white ">
                        <thead className="bg-gray-500 text-white">
                            <tr>
                                <th className="w-1/12 text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                                <th className="w-3/12 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                <th className="w-3/12 text-left py-3 px-4 uppercase font-semibold text-sm">Phone number</th>
                                <th className="w-3/12 text-left py-3 px-4 uppercase font-semibold text-sm">Address</th>
                                <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 ">
                             {currentUser.map((value, key) => {
                                return(
                                    <tr key={key} style={{borderBottom:"1px solid gray"}}>
                                        <td className="text-left py-2 px-4">{key + 1}</td>
                                        <td className="text-left py-2 px-4">{value.nameUser}</td>
                                        <td className="text-left py-2 px-4">{value.numberUser}</td>
                                        <td className="text-left py-2 px-4">{value.addressUser}</td>
                                        <td className="flex py-2">
                                        <button onClick={()=>handleShowFormDetail(value.id)} className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 rounded-md">Details</button>
                                        <button onClick={()=>handleShowFormDel(value.id)} className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 rounded-md mx-4">Delete</button>
                                        </td>
                                     </tr>                                         
                                    )
                                })}                                                             
                        </tbody>
                    </table>
                </div>
            </div>
            {isFormDelete && (
                <div className="absolute bg-blue-100 top-1/2 left-1/2 transform -translate-x-2/4 bg-white shadow-sm rounded-2xl px-8 pt-6 pb-8 mb-4 w-2/4 z-10">
                    <h1 className="text-center text-2xl font-bold mb-8">Are you sure you want to delete?</h1>
                    <div className="flex justify-center">
                        <button onClick={confirmDeleteOrder} className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-32 rounded-full mt-6 mr-4">
                            OK
                        </button>
                        <button onClick={handleShowFormDel} className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-32 rounded-full mt-6 ml-4">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            {isFormDetail && (
                <div className="absolute top-1/4 left-1/2 transform -translate-x-2/4 bg-blue-100 shadow-sm rounded-2xl px-8 pt-6 pb-8 mb-4 w-3/4 z-10">
                <div onClick={cancelFormDetail} className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer">
                    <i className="fas fa-times "></i>
                </div>
                <h1 className="text-center text-2xl font-bold mb-6">DETAILS</h1>
                <div className ="w-full">
                    {infoUser.map((value, index) => {
                        return(
                            <div key={index} className="w-1/2 mr-4 w-full">
                                <div className="flex">
                                    <label className="block text-gray-700 font-bold mb-2 text-xl mr-2">
                                        Name:
                                    </label> 
                                    <label className="block text-gray-700 font-bold mb-2 text-xl">
                                        {value.nameUser}
                                    </label>                           
                                </div>
                                <div className="flex">
                                    <label className="block text-gray-700 font-bold mb-2 text-xl mr-2">
                                        Phone number:
                                    </label>  
                                    <label className="block text-gray-700 font-bold mb-2 text-xl">
                                        {value.numberUser}
                                    </label>                           
                                </div>
                                <div className="flex">
                                    <label className="block text-gray-700 font-bold mb-2 text-xl mr-2">
                                        Address:
                                    </label>
                                    <label className="block text-gray-700 text-xl font-bold mb-2">
                                        {value.addressUser}
                                    </label>                           
                                </div>
                            </div>  
                        )
                    })}
                    <div className="w-full">                              
                        <table className=" mx-auto mt-4 w-full">
                            <thead>
                            <tr>
                                <th className="px-1 text-xl">Name</th>
                                <th className="px-1 text-xl">Quantity</th>
                                <th className="px-1 text-xl">Price </th>
                                <th className="px-1 text-xl">Note</th>
                            </tr>
                            </thead>
                            <tbody>
                                {infoOrder.map((value, index) => {
                                    return(
                                        <tr key={index}>
                                            <td className="text-left border border-gray-400 text-xl p-2 px-1 w-3/12 break-all">{value.name}</td>
                                            <td className="border border-gray-400 text-xl p-2 px-1 break-all w-2/12">{value.quantity}</td>
                                            <td className="text-left border border-gray-400 text-xl p-2 px-1 break-all w-3/12">{numberWithCommas(value.price)} VNĐ</td>
                                            <td className="text-left border border-gray-400 text-xl p-2 px-1 break-all w-4/12">{value.note}</td>    
                                        </tr>                      
                                    )
                                })}
                            </tbody>
                        </table>
                        <h2 className="text-right w-full mr-8 text-xl mt-5 font-bold">Total: {numberWithCommas(totalPrice())} VND</h2>
                    </div>
                </div>
            </div>
            )}
            <ToastContainer/>
            <Pagination totalDrink={listUser.length} postsPerPage={postsPerPage} paginate={paginate}/>
        </div>
    );
};

export default ManagerOrders;