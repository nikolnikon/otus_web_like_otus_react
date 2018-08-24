import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FeaturesStrip from './FeaturesStip';

const features = [
    {
        title: 'Получение углубенных знаний',
        description: 'Программы курсов разработаны специально для слушателей, которые уже имеют опыт программирования',
        image: {
            url: 'https://via.placeholder.com/40x40',
            alt: '',
        },
    },
    {
        title: 'Много практики',
        description: 'Каждый курс содержит большое количество домашних заданий, чтобы закрепить теоретические знания на практике',
        image: {
            url: 'https://via.placeholder.com/40x40',
            alt: '',
        },
    },
    {
        title: 'Актуальные технологии',
        description: 'Во всех курсах рассматриваются актуальны на данный момент технологии',
        image: {
            url: 'https://via.placeholder.com/40x40',
            alt: '',
        },
    },
    {
        title: 'Поддержка преподавателя',
        description: 'Проверяя домашние задания и отвечая на вопросы, преподаватели делятся с вами своими пракическими знаниями',
        image: {
            url: 'https://via.placeholder.com/40x40',
            alt: '',
        },
    }
];

class App extends Component {
    render() {
        return (
            <div className="page">
                <Header className="page__header" />
                <FeaturesStrip features={features}/>
            </div>
        );
    }
}

export default App;
