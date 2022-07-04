import React from 'react';

import "../../../styles/styles.scss"



const Feedback = () => {
    return (
        <div className="bottom-0 left-0 right-0 bg-custom-yellow py-20 text-center" id="contact">
            <span className="mt-12 font-bold text-5xl text-mobile">Your Feedback</span>
            <form className="mt-10 w-4/5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 gap-8-mobile">
                    <input type="text" className="rounded-lg bg-gray-200 p-2" placeholder="name" />
                    <input type="text" className="rounded-lg bg-gray-200 p-2" placeholder="email" />
                </div>
                <div className="mt-10">
                    <textarea className="rounded-lg bg-gray-200 p-2 w-full h-screen-25" placeholder="message" defaultValue={""} />
                </div>
                <div className="mt-6">
                    <button type="submit" className="text-white text-xl hover:shadow-lg rounded-lg bg-gray-800 px-5 py-2">Send</button>
                </div>
            </form>
        </div>
    );
};


export default Feedback;