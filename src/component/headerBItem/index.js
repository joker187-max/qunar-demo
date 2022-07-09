import React, { Component } from "react";

import { dateFormat, weekFormat } from "../../service/format";
import "./index.css";

export default class HeaderBItem extends Component {
  render() {
    const { handelIndex, index, tabClass, lowPrice } = this.props;
    return (
      <div className={`date-item ${tabClass}`} onClick={handelIndex}>
        <div>{dateFormat(Date.now() + index * (1000 * 24 * 60 * 60))}</div>
        <div>{weekFormat(Date.now() + index * (1000 * 24 * 60 * 60))}</div>
        <div>{"￥"+lowPrice}</div>
      </div>
    );
  }
}
