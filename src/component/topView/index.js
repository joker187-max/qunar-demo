import React, { Component } from "react";
import "./index.css";

export default class TopView extends Component {
  // 将页面滚动到顶部
  scorllToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
    });
  };
  render() {
    return (
      <div className="top-view" ref={(t) => (this.view = t)}>
        <img
          src={require("../../assets/img/top.png")}
          onClick={this.scorllToTop}
        />
        <div className="text">顶部</div>
      </div>
    );
  }
}
