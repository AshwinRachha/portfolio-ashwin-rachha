import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import Popup from "./Popup"; // Import the Popup component
import subheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";
import chatIcon from "../assets/chat-icon.png"; // Import your chat icon or use an appropriate path
import axios from 'axios';

export default class AboutMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: menuItem === 4 ? this.state.activeSubheading : 1
    });
  };

  handleSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "CAREER", "CHAT"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];

    const activeMenuIcon =
      activeMenuTitle === "PERSONAL"
        ? personalIcon
        : activeMenuTitle === "EDUCATION"
        ? educationIcon
        : activeMenuTitle === "CAREER"
        ? careerIcon
        : chatIcon;

    const isChatActive = activeMenuItem === 4;
    const subheadings = subheadingsData[activeMenuItem];

    return (
      <>
        <div className="menu">
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handleMenuItemClick(index + 1)}
            />
          ))}
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
          {isChatActive ? (
            <Popup />
          ) : (
            subheadings.map((subheading, index) => (
              <AboutSubheading
                key={index}
                title={subheading.title}
                content={subheading.content}
                active={activeSubheading === index + 1}
                onClick={() => this.handleSubheadingClick(index + 1)}
                menuItem={activeMenuItem}
              />
            ))
          )}
        </div>
      </>
    );

  }
}
