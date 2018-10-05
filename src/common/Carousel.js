import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.scss'


const Carousel = (props) => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: 'carousel',
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                {props.children}
            </Slider>
        </div>
    )
};

export default Carousel;
