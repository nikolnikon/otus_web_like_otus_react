import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'

export default class Carousel extends Component {
    render() {
        const {settings} = this.props;

        return (
            <div className="carousel">
                <Slider {...settings}>
                    {this.props.children}
                </Slider>
            </div>
        );
    }
}