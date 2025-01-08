let list = [
  { type: 1, price: 100, color: "black", sales: 60, name: "牛客logo马克杯" },
  { type: 2, price: 40, color: "blue", sales: 100, name: "无盖星空杯" },
  { type: 4, price: 60, color: "green", sales: 200, name: "老式茶杯" },
  { type: 3, price: 50, color: "green", sales: 600, name: "欧式印花杯" },
];
list
  .map((item) => {
    return `<li>${item.name}</li>`;
  })
  .join("");
