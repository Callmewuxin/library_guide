// pages/cores/time.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timelist:
    [
      {room: '借书、还书',location: '一楼自助借还书机',workday:'08:00~23:00',weekends:'08:00~23:00'},
      { room: '本部图书代借', location: '一楼查询台',  workday: '08:00~23:00' ,weekends: '08:00~23:00'},
      { room: '本部图书代还', location: '一楼出纳台', workday: '08:00~23:00' ,  weekends: '08:00~23:00' },
      { room: '报纸、期刊阅览', location: '二楼阅览室', workday: '08:00~23:00',weekends: '08:00~23:00' },
      { room: '上网', location: '306室（数字信息阅览室）',  workday: '08:00~23:00' , weekends: '08:00~23:00' },
      { room: '复印/打印/誉印', location: '请联系办公室（101室）',workday: '08:00~16:30' ,  weekends: '不开放'  },
      { room: '各类标牌制作', location: '请联系办公室（101室）',  workday: '08:00~23:00' , weekends: '不开放' }
    ]
  
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