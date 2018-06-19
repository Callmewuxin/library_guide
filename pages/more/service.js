// pages/more/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    service:"",
    isExist:0,
    list:[
      { serviceName: "研讨间", serviceIntro: "提供同学讨论研究（使用前先申请）", serviceLoc: "图书馆2、4楼西侧", isManual: "自助", serviceImg:["http://111.231.67.97/images/service/ytj1.jpg",
        "http://111.231.67.97/images/service/ytj2.jpg"  ]},
      { serviceName: "查询电脑", serviceIntro: "查询阅览室内书籍信息与位置", serviceLoc: "图书馆2、3、4、5、6楼大厅", isManual: "自助", serviceImg: ["http://111.231.67.97/images/service/cx1.jpg", "http://111.231.67.97/images/service/cx2.jpg", "http://111.231.67.97/images/service/cx3.jpg",
        "http://111.231.67.97/images/service/cx4.jpg"]},
      { serviceName: "小影厅", serviceIntro: "放映纪录片等影片丰富同学们的知识与试听体验", serviceLoc: "图书馆3、4楼书籍阅览室外侧走廊", isManual: "自助", serviceImg: ["http://111.231.67.97/images/service/yt1.jpg","http://111.231.67.97/images/service/yt2.jpg",
        "http://111.231.67.97/images/service/yt3.jpg"] },
      { serviceName: "机房", serviceIntro: "提供电脑可供同学们使用。（刷校园卡计费）", serviceLoc: "图书馆3、4楼书籍阅览室外侧走廊", isManual: "自助", serviceImg: ["http://111.231.67.97/images/service/jf1.jpg" ,
        "http://111.231.67.97/images/service/jf2.jpg"
      ]},
      { serviceName: "存包柜", serviceIntro: "供同学们暂时存储物品用（需要刷校园卡）", serviceLoc: "图书馆3、4、5楼书籍阅览室门口左侧", isManual: "自助", serviceImg: ["http://111.231.67.97/images/service/cbg1.jpg",
        "http://111.231.67.97/images/service/cbg2.jpg",
        "http://111.231.67.97/images/service/cbg3.jpg"
      ] },

    ]
    
  },
  judge:function(e)
  {
      wx.navigateTo({
        url: '/pages/index/index',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      service:options.service,
    });
    console.log("接收到的参数是str=" + options.service);
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