import React, { Component } from 'react'
import Flickity from 'flickity'

// Данный класс пока не используется

class MyFlickity extends Component {
    getInitialState() {
        return {
            selectedIndex: 0
        }
    }

    componentDidMount() {
        const carousel = this.refs.carousel.getDOMNode();
        const options = {
            cellSelector: '.carousel__cell',
            pageDots: false,
            cellAlign: 'left',
            wrapAround: true,
            initialIndex: 0,
            accessibility: true
        };

        this.flkty = new Flickity(carousel, options);
        this.flkty.on('cellSelect', this.updateSelected);
    }

    updateSelected() {
        const index = this.flkty.selectedIndex;
        this.setState({
            selectedIndex: index
        });
    }

    componentWillUnmount() {
        if (this.flkty) {
            this.flkty.off('cellSelect', this.updateSelected);
            this.flkty.destroy();
        }
    }

    render() {
        return (
            <div ref='carousel' className='carousel'>
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
            </div>
        )
    }
}

export default MyFlickity;