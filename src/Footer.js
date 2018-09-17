import React, { Component } from 'react';
import './Footer.css';
import Menu from './Menu';


const footer_menu_items = [
    {name: 'О компании', url: '#'},
    {name: 'Отзывы', url: '#'},
    {name: 'Контакты', url: '#'},
];

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer__container">
                    <div className="row footer__row">
                        <div className="social">
                            <a href="#" className="social__icon social__icon_vk"/>
                            <a href="#" className="social__icon social__icon_fb"/>
                        </div>
                        <Menu className={"footer__menu"}
                              items={footer_menu_items}
                        />
                    </div>
                    <div className="row footer__row">
                        © 2015-2018 Like OTUS
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;