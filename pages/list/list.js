// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  // 返回记录
  getReturn() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  // 删除
  getDelete(e) {
    // console.log(e);
    let thar = this
    let id = e.currentTarget.dataset.id;
    let dataOpt = {
      db: 'news',
      type: 'delete',
      condition: {
        _id: id
      }
    }
    wx.cloud.callFunction({
      name: 'dataServerOpt',
      data: dataOpt,
      success(res) {
        // console.log(res);
        wx.showToast({
          title: '删除成功',
          duration: 500
        })
        setTimeout(()=>{
          thar.getList();
        }, 1000)
      }
    })
  },

  // 查询
  getList() {
    let thar = this;
    let dataOpt = {
      db: 'news',
      type: 'get',
      condition: {}
    }
    wx.cloud.callFunction({
      name: 'dataServerOpt',
      data: dataOpt,
      complete(res) {
        // console.log(res);
        thar.setData({
          list: res.result.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})