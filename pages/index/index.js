// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val: ''
  },

  calNum(e) {
    // console.log(e);
    let thar = this;
    let cloudNum1 = e.detail.value.num1;
    let cloudNum2 = e.detail.value.num2;
    let opt = e.detail.target.dataset.id;

    if (cloudNum1=='' || cloudNum2 == '') {
      wx.showToast({
        title: '错误',
        icon: 'error'
      })
      return;
    }

    wx.cloud.callFunction({
      name: 'cal',
      data: {
        num1: cloudNum1,
        num2: cloudNum2,
        opt: opt
      },
      success(res) {
        // console.log(res);
        thar.setData({
          val: res.result
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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