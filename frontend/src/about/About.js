import React, { Component } from "react";
import Avatar from "../assets/avatar-image.png";
import AboutMenu from "./AboutMenu.js";

export default class About extends Component {
    
    render() {

        return (
            <>
                <div className="avatar-container">
                    <img src={Avatar} alt="Avatar" />
                </div>
                <div className="about-content">
                    <AboutMenu />
                </div>
            </>
        );
        
    }
}
