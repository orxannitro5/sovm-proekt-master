import React,{Component} from "react";
import "./footer.css";
import Instagram from "./instagram (1).png";
import Facebook from "./facebook-app-symbol.png"
import X from "./twitter.png"
export default class Footer extends Component{
    render(){
        return(
            <div className="footer-block">
                <div className="footer-content">
                    <div className="footer-first-colomn">
                        —
                        <p>Бронирование</p>
                        <p>1-800-000-000</p>

                    </div>
                    <div className="footer-second-colomn">
                        —
                        <p>Мы в соцсетях</p>
                        <img className="social-media" alt="" src={X}/>
                        <img className="social-media" alt="" src={Facebook }/>
                        <img className="social-media" alt="" src={Instagram} />

                    </div>
                    <div className="footer-third-colomn">
                        —
                        <p>© 2035 by Seaside B&B</p>
                        <p>Сайт создан на Wix.com</p>

                    </div>
                </div>
            </div>
        );
    };
}