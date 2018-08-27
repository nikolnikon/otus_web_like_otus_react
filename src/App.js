import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FeaturesStrip from './FeaturesStip';
import CoursesStrip from './CoursesStrip';
import Footer from "./Footer";

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

const courses = [
    {
        name: 'Web-разработчик на Python',
        description: 'Станьте fullstack-разработчиком уровня middle, спообным с нуля создавать современные ' +
        'web-приложения.',
        start_date: '13 августа',
        duration: '5',
        tags: ['Python ', 'Django ', 'ReactJS'],
        logo:'https://via.placeholder.com/350x220/e8117f/ffffff',
    },
    {
        name: 'Реляционные СУБД',
        description: 'Станьте архитектором баз данных уровня middle, спообным проектировать структуру БД, выполнять ее' +
        ' оптимизацию и решать другие задачи DBA.',
        start_date: '28 сентября',
        duration: '3',
        tags: ['SQL ', 'PostgreSQL'],
        logo:'https://via.placeholder.com/350x220/e8117f/ffffff',
    },
    {
        name: 'Разработчик C++',
        description: 'Станьте С++ разработчиком уровня middle, спообным создавать производительные приложения.',
        start_date: '25 сентября',
        duration: '5',
        tags: ['С++ ', 'STL ', 'Boost'],
        logo:'https://via.placeholder.com/350x220/e8117f/ffffff',
    }
];

class App extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <FeaturesStrip features={features}/>
                <CoursesStrip courses={courses} className="strip_background_grey"/>
                <Footer/>
            </div>
        );
    }
}

export default App;
