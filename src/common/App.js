import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Header from './Header'
import FeaturesStrip from '../feature/FeaturesStip'
import CoursesStrip from '../course/CoursesStrip'
import EmployersStrip from '../employer/EmployersStrip'
import RegistrationSegment from '../user/RegistrationSegment'
import Footer from "./Footer"
import Main from "./Main";

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
        logo: 'https://via.placeholder.com/350x220/e8117f/ffffff',
    },
    {
        name: 'Реляционные СУБД',
        description: 'Станьте архитектором баз данных уровня middle, спообным проектировать структуру БД, выполнять ее' +
        ' оптимизацию и решать другие задачи DBA.',
        start_date: '28 сентября',
        duration: '3',
        tags: ['SQL ', 'PostgreSQL'],
        logo: 'https://via.placeholder.com/350x220/e8117f/ffffff',
    },
    {
        name: 'Разработчик C++',
        description: 'Станьте С++ разработчиком уровня middle, спообным создавать производительные приложения.',
        start_date: '25 сентября',
        duration: '5',
        tags: ['С++ ', 'STL ', 'Boost'],
        logo: 'https://via.placeholder.com/350x220/e8117f/ffffff',
    }
];

const employers = [
    {
        name: 'Яндекс',
        logo: 'images/employers/yandex.png',
    },
    {
        name: 'DataArt',
        logo: 'images/employers/data_art.png',
    },
    {
        name: 'Лаборатория Касперского',
        logo: 'images/employers/kaspersky.png',
    },
    {
        name: 'My Book',
        logo: 'images/employers/mybook.png',
    },
];

const user = {
    username: 'nikolnikon@gmail.com',
    email: 'nikolnikon@gmail.com',
    first_name: 'Николай',
    last_name: 'Никонов',
    password: 'legoland',
    confirm_password: 'legoland',
};

class App extends Component {

    render() {
        return (
            <React.Fragment>
            <Header/>
            <Main>
                {/*<FeaturesStrip features={features}/>*/}
                {/*<CoursesStrip courses={courses} className="strip_background_grey"/>*/}
                {/*<EmployersStrip employers={employers}/>*/}
                <RegistrationSegment user={user}/>
            </Main>
            <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
