// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 创建数据库对象
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {

  // 接收数据
  let news = {
    newsTitleCloud: event.newsTitle,
    newsDescribeCloud: event.newsDescribe,
    newsAuthorCloud: event.newsAuthor,
    newsOriginCloud: event.newsOrigin,
    newsContentCloud: event.newsContent,
  }

  // 验证数据
  if (news.newsTitleCloud === '' || news.newsDescribeCloud === '' || news.newsAuthorCloud === '' || news.newsOriginCloud === '' || news.newsContentCloud === '') {
    return null;
  } else {
    // 数据库添加操作
    return db.collection('news').add({
      data: news
    })
  }
}