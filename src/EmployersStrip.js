import React, { Component } from 'react'
import Strip from "./Strip"
import Flickity from 'react-flickity-component'
import './EmployersStrip.css'

class EmployersStrip extends Component {
    render() {
        const flickityOptions = {
            cellSelector: '.carousel__cell',
            pageDots: false,
            cellAlign: 'left',
            wrapAround: true,
        };

        return (
            <Strip header={'Нашим выпускникам предлагают работу'}>
                <Flickity
                    className={'carousel'}
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={false}
                >
                    <div className="carousel__cell">
                        <img src="images/employers/yandex.png" alt="Яндекс"/>
                    </div>
                    <div className="carousel__cell">
                        <img src="images/employers/data_art.png" alt="DataArt"/>
                    </div>
                    <div className="carousel__cell">
                        <img src="images/employers/kaspersky.png" alt="Лаборатория Касперского"/>
                    </div>
                    <div className="carousel__cell">
                        <img src="images/employers/mybook.png" alt="My Book"/>
                    </div>
                </Flickity>
            </Strip>
        )
    }
}

export default EmployersStrip;