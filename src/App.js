import React, { Component, Fragment } from "react";
import PubSub from "pubsub-js";

// import lowPrice from "./service/array";
// import store from "./store"; redux方式管理
// import { getActionCreator } from "./store/actionCreator";
import { observer, inject } from "mobx-react";
// import request from "./service/request";
import Header from "./component/header";
import List from "./component/list";
import TabBar from "./component/tabBar";
import TopView from "./component/topView";

@inject("ticketsStore")
@observer
export default class App extends Component {
  // // 当store数据改变时，进行的回调操作
  // handelStoreChnage = () => {
  //   this.setState({ tickets: store.getState() });
  // };
  // 点击指定天的票数据
  handelIndexChange = (index) => {
    const { ticketsStore } = this.props;
    ticketsStore.changeIndex(index);
    PubSub.publish("index", ticketsStore.currentIndex);
    this.sort();
  };

  // 对数据做出推荐排序
  sort = (flag) => {
    const { tickets, currentIndex } = this.props.ticketsStore;
    const ticketList = tickets[currentIndex];
    ticketList.replace(
      ticketList.slice().sort((a, b) => {
        let p = a.endTime.split(":").join("") - a.startTime.split(":").join("");
        let n = b.endTime.split(":").join("") - b.startTime.split(":").join("");
        return p - n;
      })
    );
  };

  // 对数据做出时间排序
  time = (flag) => {
    const { tickets, currentIndex } = this.props.ticketsStore;
    const ticketlist = tickets[currentIndex];
    ticketlist.replace(
      ticketlist.slice().sort((a, b) => {
        let start = a.startTime.split(":").join("");
        let end = b.startTime.split(":").join("");
        return (start - end) * flag;
      })
    );
  };
  // 对数据做出价格排序
  money = (flag) => {
    const { tickets, currentIndex } = this.props.ticketsStore;
    const ticketlist = tickets[currentIndex];
    ticketlist.replace(
      ticketlist.slice().sort((a, b) => {
        return (a.price - b.price) * flag;
      })
    );
  };

  componentDidMount() {
    const { ticketsStore } = this.props;
    ticketsStore.getTickets();
    let time = null;
    window.addEventListener("scroll", () => {
      // 监听滚动，一旦滚动，tab栏添加类配合动画实现平滑隐藏
      this.tabEle.tabar.classList.add("tab-hidden");
      this.h.hb.classList.add("header-bottom-hidden");
      // 监听页面的滚动距离，一旦大于某个阈值就控制顶部按钮的消失与隐藏
      if (window.scrollY >= 100) {
        this.topview.view.style.display = "block";
      }
      if (window.scrollY < 100) {
        this.topview.view.style.display = "none";
      }
      // 平滑隐藏后再度出现，定义一个定时器，并实现防抖加以优化
      if (time !== null) {
        clearTimeout(time);
      }
      time = setTimeout(() => {
        this.tabEle.tabar.classList.remove("tab-hidden");
        this.h.hb.classList.remove("header-bottom-hidden");
      }, 500);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    // const { tickets, currentIndex } = this.state;
    // const ticketlist = tickets[currentIndex];
    // const newArr = lowPrice(tickets);
    const { ticketsStore } = this.props;
    const index = ticketsStore.currentIndex;

    return (
      <Fragment>
        <Header
          handelIndex={this.handelIndexChange}
          currentIndex={ticketsStore.currentIndex}
          newArr={ticketsStore.lowPrice}
          ref={(heaEle) => (this.h = heaEle)}
        >
          <img src={require("./assets/img/left.png")} />
          <span>
            北京 <img src={require("./assets/img/single.png")} /> 上海
          </span>
          <img src={require("./assets/img/search.png")} />
        </Header>
        <List tickets={ticketsStore.tickets[index]} />
        <TabBar
          time={this.time}
          money={this.money}
          sort={this.sort}
          ref={(tab) => (this.tabEle = tab)}
        />
        <TopView ref={(tv) => (this.topview = tv)} />
      </Fragment>
    );
  }
}
