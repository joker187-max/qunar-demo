export default function lowPrice(array) {
  const newArr = [];
  array.forEach((item, index) => {
    let low = item[0].price;
    for (let i = 0; i < item.length; i++) {
      if (item[i].price <= low) low = item[i].price;
    }
    newArr[index] = low;
  });
  return newArr;
}
