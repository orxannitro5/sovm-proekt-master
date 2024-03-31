import React, { Component } from "react";
import FirstBlock from "./first-block";
import SecondBlock from "./second-block";
import Footer from "./footer";
import "./App.css"
export default class App extends Component {
  
  render() {

    return (
      <div>
        <FirstBlock />
        <SecondBlock />
        <Footer />
        
       
      </div>
    );
  };
};

