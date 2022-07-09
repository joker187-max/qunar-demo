import React, { Component } from "react";
import PubSub from "pubsub-js";

import "./index.css";
import TabItem from "../tabBarItem";

export default class TabBar extends Component {
  state = {
    tabs: [
      { tabName: "筛选", id: "filter", name1: "筛选", name2: "筛选" },
      { tabName: "推荐排序", id: "sort", name1: "推荐排序", name2: "推荐排序" },
      { tabName: "时间", id: "time", name1: "从早到晚", name2: "从晚到早" },
      { tabName: "价格", id: "money", name1: "从低到高", name2: "从高到低" },
    ],
    current: 1,
    count: 0,
  };

  componentDidMount() {
    PubSub.subscribe("index", (msg, data) => {
      this.itemClick(1);
    });
  }

  // 底部tab点击切换活跃item
  itemClick = (index) => {
    const { count } = this.state;
    this.setState(
      {
        current: index,
        count: count + 1,
      },
      () => {
        const { tabs, current, count } = this.state;
        let method = tabs[current].id;
        let flag = count % 2 === 0 ? -1 : 1;
        this.props[method] && this.props[method](flag);
      }
    );
  };

  render() {
    const { tabs, current, count } = this.state;
    const tabList = tabs.map((item, index) => {
      let tabUrl =
        index === current
          ? require("../../assets/img/" + item.id + "-active.png")
          : require("../../assets/img/" + item.id + ".png");
      let tabClass = index === current ? "tab-active" : "";
      let tabName =
        index === current
          ? `${count % 2 === 0 ? item.name2 : item.name1}`
          : `${item.tabName}`;
      return (
        <TabItem
          key={index}
          tabClass={tabClass}
          tabUrl={tabUrl}
          tabName={tabName}
          tabEvent={() => {
            this.itemClick(index);
          }}
        ></TabItem>
      );
    });
    return (
      <div className="tab" ref={(bar) => (this.tabar = bar)}>
        {tabList}
      </div>
    );
  }
}
