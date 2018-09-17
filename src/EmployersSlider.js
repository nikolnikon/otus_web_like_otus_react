import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './EmployersSlider.css'

export default class EmployersSlider extends Component {
    render() {
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
                    <div>
                        <img src="images/employers/yandex.png" alt="Яндекс"/>
                    </div>
                    <div>
                        <img src="images/employers/data_art.png" alt="DataArt"/>
                    </div>
                    <div>
                        <img src="images/employers/kaspersky.png" alt="Лаборатория Касперского"/>
                    </div>
                    <div>
                        <img src="images/employers/mybook.png" alt="My Book"/>
                    </div>
                </Slider>
            </div>
        );
    }
}