// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let num1 = parseInt(event.num1);
  let num2 = parseInt(event.num2);
  let opt = event.opt;
  let sum = '';
  switch (opt) {
    case "+":
      sum = num1 + num2
      break;
    case "-":
      sum = num1 - num2
      break;
    case "*":
      sum = num1 * num2
      break;
    case "/":
      sum = num1 / num2
      break;
  }
  return sum;
}