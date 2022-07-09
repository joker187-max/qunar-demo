import React, { Component } from "react";
import { observer } from "mobx-react";
import ListItem from "../listItem";
import "./index.css";

// 在此处使用了PureComponent，父组件更新，不会引起子组件更新
@observer
export default class List extends Component {
  componentDidMount() {}
  render() {
    const { tickets } = this.props;
    return (
      <div className="ticketlist">
        {tickets &&
          tickets.map((item, index) => {
            return <ListItem key={index} ticket={item} />;
          })}
        <div className="bottom-white"></div>
      </div>
    );
  }
}
