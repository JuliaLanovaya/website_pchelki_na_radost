import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"

    };

    return (

        <Slider {...settings}>
            <div>
                <img src="/images/4.jpg"
                    alt='' />
            </div>
            <div>
                <img src="/images/5.jpg"
                    alt='' />
            </div>
            <div>
                <img src="/images/6.jpg"
                    alt='' />
            </div>
            <div>
                <img src="/images/7.jpg"
                    alt='' />
            </div>
            <div>
                <img src="/images/8.jpg"
                    alt='' />
            </div>


        </Slider>


    );
}

















