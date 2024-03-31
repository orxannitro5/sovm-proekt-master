import React, { Component } from "react";
import Captcha from "./clickbutton";
import "./second-block.css";
import Map from "./map";

export default class SecondBlock extends Component {
    state = {
        showModal: false
    }
    submitFunc = (event) => {
        event.preventDefault();
        let { showModal } = this.state;
        this.setState({ showModal: !showModal })
    }
    render() {
        let { showModal } = this.state;
        return (
            <div className="a" >
                <div className="second-main">
                    <div className="contact-text">Контакты</div>
                    <div className="main-area">
                        <p className="main-area-text">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды,
                            чтобы добавить свое содержание и настроить шрифт.
                            Текстовый блок можно перетащить в любое место на странице.</p>
                        <div className="main-area-second-section">
                            <div className="main-area-second-section-left-side">
                                <p className="hyphen">——</p>
                                <h1 className="main-area-second-section-left-side-title">Seaside B&B</h1>
                                <div>Москва,Россия</div>
                                <div>15035,ул.Балгуч,7</div>
                                <div>info@mysite.ru</div>
                                <div>Тел: +7495-000-000</div>
                                <div>Факс: +7495-000-000</div>

                            </div>
                            <div className="main-area-second-section-right-side">
                                <form onSubmit={this.submitFunc} className="all-inputs">
                                    <input className="input" type="text" placeholder="Имя"></input>
                                    <input className="input" type="email" placeholder="Эл почтв" required></input>
                                    <input className="input" type="number" placeholder="Телефон"></input>
                                    <textarea className="textarea" placeholder="Добавить сообщение"></textarea>
                                    <button className="send-btn">Отправить</button>
                                </form>
                            </div>

                        </div>
                        <div className="google-map">
                            <Map />
                        </div>
                    </div>
                </div>
                {showModal && <Captcha />}                
            </div>
        );
    };
};