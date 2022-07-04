import React from 'react';

import "../../styles/styles.scss"


const Footer = () => {
    return (
        <footer className="footer bg-main-light bg-opacity-80 relative pt-1 border-b-2 bg-custom-yellow">
            <div className="container mx-auto px-6">
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mb-2">
                                Dịch vụ & Hỗ trợ
                            </span>
                            <span className="my-2">
                                <a
                                    href="#"
                                    className="text-white  text-md hover:text-gray-700"
                                >
                                    Hướng dẫn đặt hàng
                                </a>
                            </span>
                            <span className="my-2">
                                <a
                                    href="#"
                                    className="text-white  text-md hover:text-gray-700"
                                >
                                    Trung tâm CSKH
                                </a>
                            </span>
                            <span className="my-2">
                                <a
                                    href="#"
                                    className="text-white  text-md hover:text-gray-700"
                                >
                                    Điều khoản sử dụng
                                </a>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                                Chính sách chung
                            </span>
                            <span className="my-2">
                                <a href="#" className="text-white text-md hover:text-gray-700">
                                    Chính sách giao hàng
                                </a>
                            </span>
                            <span className="my-2">
                                <a
                                    href="#"
                                    className="text-white  text-md hover:text-gray-700"
                                >
                                    Phương thức thanh toán
                                </a>
                            </span>
                            <span className="my-2">
                                <a href="#" className="text-white text-md hover:text-gray-700">
                                    Chính sách đổi trả
                                </a>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                                Về chúng tôi
                            </span>
                            <span className="my-2">
                                <a
                                    href="#"
                                    className="text-white  text-md hover:text-gray-700"
                                >
                                    Đánh giá từ khách hàng
                                </a>
                            </span>
                            <span className="my-2">
                                <a
                                    href="#"
                                    className="text-white  text-md hover:text-gray-700"
                                >
                                    Ưu điểm của Food&Drink
                                </a>
                            </span>
                            <span className="my-2">
                                <a
                                    href="#"
                                    className="text-white  text-md hover:text-gray-700"
                                >
                                    Tuyển dụng
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-white font-bold mb-2">
                            © 2021 by ChienPN
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};



export default Footer;