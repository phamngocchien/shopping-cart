import React from 'react';
import "../../../styles/styles.scss"
import imgBanner from "../../../assets/img/pizza-hero.png"

const Banner = () => {
    return (
        <div className="top-0 left-0 right-0 2xl:px-24 xl:pt-16 xl:pb-24 bg-custom-yellow rounded-b-full">       
            <div className="sm:inline-block xl:flex justify-center lg:my-8 w-full">
                <div className="lg:col-span-7 xl:ml-48 text-center hidden-mobile">
                    <span className="font-bold text-mobile md:text-4xl lg:text-6xl">
                        Food&amp;Drink
                    </span>
                    <span className="font-bold text-5xl block ml-48 hidden xl:block">
                        your choice
                    </span>
                    </div>
                        <div className="md:block md:flex md:justify-center flex-mobile">
                        <img src={imgBanner} className="md:h-40 xl:h-64 mobile-h" />
                </div>
            </div>
        </div>

    );
};


export default Banner;