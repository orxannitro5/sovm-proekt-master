import React, { Component } from "react";
import "./clickbutton.css";
export default class Captcha extends Component {
    clickFunc = (event)=>{
        window.location.reload()
    }


    render() {
        return (
            <>
                <div className="captcha" />
                <div className="captcha-child">
                    <div className="captcha-content">
                        
                        <button onClick={this.clickFunc} className="delete-btn">
                            x</button>
                        <h1>Подтверждение</h1>
                        <p>Пожалуйста, подтвердите, что вы не робот.</p>
                    </div>
                </div>

            </>


        )
    }
} 