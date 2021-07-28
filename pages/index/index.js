// pages/index/index.js
Page({
  news: {
    newsTitle: '',
    newsDescribe: '',
    newsAuthor: '',
    newsOrigin: '',
    newsContent: ''
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  getNewsAsycn(e) {
    // console.log(e);
    // 接收数据
    this.news.newsTitle = e.detail.value.newsTitle;
    this.news.newsDescribe = e.detail.value.newsDescribe;
    this.news.newsAuthor = e.detail.value.newsAuthor;
    this.news.newsOrigin = e.detail.value.newsOrigin;
    this.news.newsContent = e.detail.value.newsContent;
    // console.log(this.news);
    // 错误验证
    if (this.valueData(this.news)) return;
    // 传送数据给云端数据录入
    this.addCloudNewsData(this.news);
  },

  // 添加云端新闻数据
  addCloudNewsData(news) {

    // 综合调用
    let dataOpt = {
      db: 'news',
      type: 'insert',
      data: news
    }
    wx.cloud.callFunction({
      name: 'dataServerOpt',
      data: dataOpt,
      complete(res) {
        console.log(res);
        if (res.result._id) {
          wx.showToast({
            title: '添加成功',
            duration: 500
          })
          setTimeout(()=>{
            wx.switchTab({
              url: '/pages/list/list',
            })
          }, 1000)
        }
      }
    })

    // wx.cloud.callFunction({
    //   name: 'cloudNewsAdd',
    //   data: news,
    //   complete(res) {
    //     console.log(res);
    //     // if(!res.result.dataResult.isSuccess) {
    //     //   wx.showModal({
    //     //     title: '警告',
    //     //     content: '服务器维护中...'
    //     //   })
    //     // }else {
    //     //   console.log(res.result.dataResult.data)
    //     // }
    //   }
    // })
  },

  // 验证输入
  valueData(news) {
    if (news.newsTitle === '' ||
        news.newsDescribe === '' ||
        news.newsOrigin === '' ||
        news.newsAuthor === '' ||
        news.newsContent === ''
    ) {
      wx.showToast({
        title: '未填写必填内容',
        icon: 'none'
      })
      return true;
    } else {
      return false;
    }
  },




  // 重置
  reset() {}
  
})