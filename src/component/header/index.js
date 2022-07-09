import React, { Component } from "react";
import HeaderBItem from "../headerBItem";

import "./index.css";

export default class Header extends Component {
  // scorllToTop = () => {
  //   window.scrollTo({
  //     left: 0,
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  render() {
    const { handelIndex, currentIndex, newArr } = this.props;
    return (
      <div className="header">
        <div className="header-top">
          <div className="left">{this.props.children[0]}</div>
          <div className="center">{this.props.children[1]}</div>
          <div className="right">{this.props.children[2]}</div>
        </div>
        <div className="header-bottom" ref={(header) => (this.hb = header)}>
          <div className="header-bottom-left">
            {newArr.map((item, index) => {
              let tabClass = index === currentIndex ? "date-item-active" : "";
              return (
                <HeaderBItem
                  key={index}
                  index={index}
                  tabClass={tabClass}
                  lowPrice={item}
                  handelIndex={() => {
                    handelIndex(index);
                  }}
                />
              );
            })}
          </div>
          <div className="header-bottom-right">
            <img src={require("../../assets/img/date.png")} alt="" />
            <span>更多日期</span>
          </div>
        </div>
      </div>
    );
  }
}
