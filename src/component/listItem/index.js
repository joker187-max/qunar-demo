import React, { Component } from "react";
import "./index.css";

export default class ListItem extends Component {
  render() {
    const { ticket } = this.props;
    return (
      <div className="list-item">
        <div className="list-item-left">
          <div className="time">
            <span>{ticket.startTime}</span>
            <span>{ticket.endTime}</span>
          </div>
          <div className="address">
            <span>{ticket.startAirport}</span>
            <img src={require("../../assets/img/Path1.png")} alt="" />
            <span>{ticket.endAirport}</span>
          </div>
          <div className="plane-type">
            <span>{ticket.airPlaneType}</span>
          </div>
        </div>
        <div className="list-item-right">
          <div className="price">{`￥${ticket.price}`}</div>
          <div className="discount">{ticket.discount}</div>
          {ticket.isRising ? (
            <div className="is-continue">
              <span>持续涨价中</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
