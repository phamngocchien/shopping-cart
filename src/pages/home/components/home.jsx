import React from 'react';

import Banner from './banner';
import Feedback from './feedback';
import TopSelling from './top-selling';
import "../../../styles/styles.scss"
// import Header from '../../../components/header/header'
// import Footer from '../../../components/footer/footer'

const Home = () => {
    return (
        <div>
            <div className="text-gray-900 bg-gray-100 font-body pt-32-mobile sm:mt-28 2xl:mt-24" id="body">
                <Banner/>
                <TopSelling/>
                <Feedback/>
            </div>
        </div>
    );
};


export default Home;