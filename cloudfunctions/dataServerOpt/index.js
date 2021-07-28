// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 创建数据库对象
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
    // 创建数据集合对象（集合名字从用户端送过来） 
    const targetDB = db.collection(event.db);
    try {
      // 录入
      if (event.type == 'insert') {
        return await targetDB.add({
          data: event.data
        })
      }
      // 更新
      if (event.type == 'update') {
        return await targetDB.doc(event.indexKey).update({
          data: event.data
        })
      }

      // 删除
      if (event.type == 'delete') {
        return await targetDB.where(event.condition).remove();
      }

      // 查询
      if (event.type == 'get') {
        return await targetDB.where(event.condition).get();
      }
 
    }catch(e) {
      console.log(e);
    }
}