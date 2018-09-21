//index.js
var WxSearch = require('../../wxSearchView/wxSearchView.js');

Page({
  data: {},

  // 搜索栏
  onLoad: function () {
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      ['研讨间', '博看朗读亭', "查询电脑", "机房", '存包柜', '自助图书杀菌机','小影厅','借书还书机'], // 热点搜索推荐，[]表示不使用
      ['研讨间', '博看朗读亭', "查询电脑", "机房", '存包柜', '自助图书杀菌机', '小影厅', '借书还书机', '提供同学讨论研究（使用前先申请）', '查询阅览室内书籍信息与位置', '放映纪录片等影片丰富同学们的知识与试听体验', '提供电脑可供同学们使用。（刷校园卡计费）', '供同学们暂时存储物品用（需要刷校园卡）', '供同学们给书籍杀菌', '供同学们借阅书籍或还书','可供同学们录制自己朗读的素材'],// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );
  },

  // 转发函数,固定部分
  wxSearchInput: WxSearch.wxSearchInput,  // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap,  // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm,  // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear,  // 清空函数

  // 搜索回调函数  
  mySearchFunction: function (value) {
    // do your job here
    // 跳转
    wx.navigateTo({
      url: 'service/service?searchValue=' + value
    })
  },

  // 返回回调函数
  myGobackFunction: function () {
    // do your job here
    // 跳转
    wx.redirectTo({
      url: '../index/index?searchValue=返回'
    })
  }

})
