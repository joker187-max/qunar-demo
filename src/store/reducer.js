const initState = [];

//用来获取机票列表
export default function reducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "ticketList":
      return [...preState, ...data];
    default:
      return preState;
  }
}
