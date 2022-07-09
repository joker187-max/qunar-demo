export const getActionCreator = (data) => ({
  type: "ticketList",
  data,
});

export const sortActionCreator = (type) => ({ type: `${type}Sort` });

