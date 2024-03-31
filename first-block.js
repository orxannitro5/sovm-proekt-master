import React ,{Component} from "react";
import "./first-block.css";
import krisha from "./krisha.webp";
import burger from "./menu.png"
import Burger from "./burger-block"
export default class FirstBlock extends Component {
    state={
        showBurger:false
    }
    burgerFunc= ()=>{
        let {showBurger} = this.state
        this.setState({showBurger:!showBurger})
    }   
    render() {
        let {showBurger} = this.state

        return (
            <>
                <div className="first-main">
                    <div className="content">
                        <div className="nav-menu">
                            <div className="fisrt-nav">
                                <img src={krisha} alt=""></img>
                                <div className="first-nav-text">Seaside B&B</div>
                                <div className="first-nav-text2">—    Сан-Хосе    —</div>
                            </div>
                            <div className="nav">Главная</div>
                            <div className="nav">О нас</div>
                            <div className="nav">Номера и цены</div>
                            <div className="nav">Развлечение</div>
                            <div className="nav">Контакты</div>
                            <div className="nav-rent">Забрoнировать</div>
                        </div>
                        <div className="active-for-phone">
                         <div className="bron">Забрoнировать</div>
                         <img onClick={this.burgerFunc} className="burger-menu" alt="" src={burger} />
                        </div>
                    </div>
                </div>
                {showBurger && <Burger  />}
            </>
        );
    }
}