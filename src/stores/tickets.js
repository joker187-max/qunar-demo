import { observable, action, computed } from "mobx";
import request from "../service/request";
import array from "../service/array";

class TicketsStore {
  @observable tickets = [];
  @observable currentIndex = 0;

  @action.bound getTickets() {
    request({
      url: "/api/get",
    }).then((res) => {
      this.setTickets(res);
    });
  }
  @action.bound changeIndex(index) {
    this.currentIndex = index;
  }
  @action.bound setTickets(tickets) {
    this.tickets = tickets;
  }
  @computed get lowPrice() {
    return array(this.tickets);
  }
}

export default TicketsStore;
