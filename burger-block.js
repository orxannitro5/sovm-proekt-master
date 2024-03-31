import React, { Component } from "react";
import "./burger-block.css"
export default class Burger extends Component {
    clickBurger=()=>{
        window.location.reload()
    }
    render() {
        return (
            <div className="burger-menu-block">
                <div className="burger-menu-button">
                    <button onClick={this.clickBurger} className="burgen-menu-btn">x</button>
                </div>
                <p className="burger-menu-nav">Главная</p>
                <p className="burger-menu-nav">О нас</p>
                <p className="burger-menu-nav">Номера и цены</p>
                <p className="burger-menu-nav">Развлечения</p>
                <p className="burger-menu-contact">Контакты</p>
            </div>
        )
    }
}