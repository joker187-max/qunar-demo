import TicketsStore from "./tickets";

class RootStore {
  constructor() {
    this.ticketsStore = new TicketsStore();
  }
}
export default RootStore;
