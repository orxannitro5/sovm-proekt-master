import React,{Component} from "react";
import "./clickbutton.css";
export default class Captcha extends Component{
    state ={
        showModal:true
    }
    returnFunc=()=>{
        this.setState({showModal:false})
        console.log("dsajdas")
    }
    render(){
        return(
            <>
            <div className="captcha" />
             <div value = {this.state.showModal}   className="captcha-child">
                    <div className="captcha-content">
                    <button onClick={this.returnFunc} className="delete-btn">x</button>
                    <h1>Подтверждение</h1>
                    <p>Пожалуйста, подтвердите, что вы не робот.</p>
                    </div>   
                </div>
            </>  
            )
    }
} 