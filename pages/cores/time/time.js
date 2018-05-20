// pages/cores/time.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["徐汇校区", "奉贤校区"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    timelist1:
    [
      { room: '中文图书借还处(108室)', location: '中一楼', workday: '08:00-17:00', weekends: '08:00-17:00' },
      { room: '情报检索室(308室)', location: '中三楼', workday: '8:00～11:30 13:00~17:00', weekends: '不开放' },
      { room: '外国教材中心(202室)', location: '南二楼', workday: '8:00～11:30 13:00~17:00', weekends: '不开放'},
      { room: '数码打印中心(117室)', location: '北一楼', workday: '8:00～11:30 13:00~17:00', weekends: '不开放'},
      { room: '复印中心(117室)', location: '北一楼', workday: '8:00～18:00', weekends: '8:00～17:00' },
      { room: '报刊阅览室(101室)', location: '南一楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '网络学习中心（102室）', location: '南一楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '信息语言阅览室(116室)', location: '北一楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '阅览室(208室)', location: '中二楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '科技阅览室（216室）', location: '北二楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '外文期刊阅览室(302室)', location: '南三楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '社会科学阅览室(316室)', location: '南三楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '外文期刊阅览室(302室)', location: '北三楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '跃升阅览室(401室)', location: '南四楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '中文期刊阅览室(416室)', location: '北四楼', workday: '8:00～22:00', weekends: '8:00～22:00' },
      { room: '馆办公室（112～114)', location: '中一楼', workday: '8:00～11:30 13:00~17:00', weekends: '8:00～11:30 13:00~17:00 周日不开放' }
    ],
    timelist2:
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
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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